const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.join(__dirname, '..');
const pleskBuildDir = path.join(projectRoot, 'plesk-build');

// 1. Run standard build
console.log('📦 Starting standard Next.js standalone build...');
execSync('npm run build', { cwd: projectRoot, stdio: 'inherit' });

// 2. Wipe and recreate plesk-build (avoids stale files and nested plesk-build/plesk-build)
console.log('\n🧹 Preparing clean plesk-build directory...');
if (fs.existsSync(pleskBuildDir)) {
  fs.rmSync(pleskBuildDir, { recursive: true, force: true });
}
fs.mkdirSync(pleskBuildDir, { recursive: true });

// 3. Copy .next/standalone to plesk-build
console.log('📁 Copying standalone build files...');
const standaloneDir = path.join(projectRoot, '.next', 'standalone');
fs.cpSync(standaloneDir, pleskBuildDir, { recursive: true });

// 3.1 Remove nested plesk-build copy (Next.js file tracer includes the output folder itself)
const nestedPleskBuild = path.join(pleskBuildDir, 'plesk-build');
if (fs.existsSync(nestedPleskBuild)) {
  fs.rmSync(nestedPleskBuild, { recursive: true, force: true });
  console.log('  ✓ Removed nested plesk-build/ copy from standalone trace');
}

// 4. Copy public folder (Next.js server.js looks here)
console.log('🖼️ Copying public assets...');
const publicDir = path.join(projectRoot, 'public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, path.join(pleskBuildDir, 'public'), { recursive: true });
  // ALSO copy public contents to the root so IIS can serve them directly (IsFile=true)
  fs.cpSync(publicDir, pleskBuildDir, { recursive: true });
}

// 5. Copy .next/static (Next.js server.js looks here)
console.log('✨ Copying static assets...');
const staticDir = path.join(projectRoot, '.next', 'static');
if (fs.existsSync(staticDir)) {
  fs.cpSync(staticDir, path.join(pleskBuildDir, '.next', 'static'), { recursive: true });
  // ALSO copy to _next/static so IIS can serve them directly, avoiding the dot-folder block
  fs.cpSync(staticDir, path.join(pleskBuildDir, '_next', 'static'), { recursive: true });
}

// 6. Copy Prisma Client (Next.js standalone often misses engines and schemas)
console.log('🗄️ Copying Prisma generated files...');
const prismaDir = path.join(projectRoot, 'node_modules', '.prisma');
const destPrismaDir = path.join(pleskBuildDir, 'node_modules', '.prisma');
if (fs.existsSync(prismaDir)) {
  fs.cpSync(prismaDir, destPrismaDir, { recursive: true });
}

const atPrismaDir = path.join(projectRoot, 'node_modules', '@prisma');
const destAtPrismaDir = path.join(pleskBuildDir, 'node_modules', '@prisma');
if (fs.existsSync(atPrismaDir)) {
  fs.cpSync(atPrismaDir, destAtPrismaDir, { recursive: true });
}

// 6.5. Copy prisma directory (schema.prisma is required for postinstall prisma generate)
console.log('📂 Copying Prisma schema directory...');
const prismaSchemaDir = path.join(projectRoot, 'prisma');
const destPrismaSchemaDir = path.join(pleskBuildDir, 'prisma');
if (fs.existsSync(prismaSchemaDir)) {
  fs.cpSync(prismaSchemaDir, destPrismaSchemaDir, { recursive: true });
}

// 7. Copy .env for local emulation testing
console.log('⚙️ Copying environment file (.env.production to .env)...');
const envProdPath = path.join(projectRoot, '.env.production');
if (fs.existsSync(envProdPath)) {
  fs.cpSync(envProdPath, path.join(pleskBuildDir, '.env'));
} else {
  const envPath = path.join(projectRoot, '.env');
  if (fs.existsSync(envPath)) fs.cpSync(envPath, path.join(pleskBuildDir, '.env'));
}

// 8. Patch server.js to support IISNode named pipes
console.log('🔧 Patching server.js for IISNode compatibility...');
const serverJsPath = path.join(pleskBuildDir, 'server.js');
if (fs.existsSync(serverJsPath)) {
  let serverJs = fs.readFileSync(serverJsPath, 'utf8');
  // IISNode passes a named pipe string (e.g. \\.\pipe\iisnode-...) via process.env.PORT.
  // Next.js uses parseInt() which turns the pipe string into NaN, causing it to fallback to 3000.
  // We remove parseInt to allow Node's http.listen() to use the named pipe directly.
  // Patch 1: Fix IISNode named pipe PORT (parseInt breaks named pipes)
  serverJs = serverJs.replace(
    /const currentPort = parseInt\(process\.env\.PORT, 10\) \|\| 3000/g,
    'const currentPort = process.env.PORT || 3000'
  );

  // Patch 2: Fix hardcoded local build machine path in outputFileTracingRoot
  // Next.js bakes the absolute local path into server.js at build time.
  // On the Plesk server this path doesn't exist, causing file-tracing to fail.
  // Replace it with __dirname so it resolves to wherever server.js lives on the server.
  serverJs = serverJs.replace(
    /"outputFileTracingRoot":"[^"]*"/g,
    '"outputFileTracingRoot":__dirname'
  );

  // Patch 3: Fix turbopack root path (also baked in as absolute local path)
  serverJs = serverJs.replace(
    /"root":"[^"]*"(,"rules")/g,
    '"root":__dirname$1'
  );

  fs.writeFileSync(serverJsPath, serverJs);
  console.log('  ✓ IISNode port patch applied');
  console.log('  ✓ outputFileTracingRoot path fixed');
  console.log('  ✓ turbopack root path fixed');
}

// 9. Generate web.config for IISNode (CRITICAL for Plesk/IIS on Windows)
console.log('🌐 Writing web.config for IISNode...');
const webConfigContent = `<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode" />
    </handlers>
    <rewrite>
      <rules>
        <rule name="StaticContent" stopProcessing="true">
          <match url="^(favicon\\.ico|robots\\.txt|site\\.webmanifest|.*\\.(png|jpg|jpeg|gif|webp|avif|svg|ico|css|js|map|woff|woff2|ttf|eot|otf|pdf|mp4|webm))$" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" />
          </conditions>
          <action type="None" />
        </rule>
        <rule name="NextJS" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
          </conditions>
          <action type="Rewrite" url="server.js" />
        </rule>
      </rules>
    </rewrite>
    <iisnode
      nodeProcessCommandLine="node"
      watchedFiles="web.config;server.js"
      loggingEnabled="true"
      logDirectory="iisnode-logs"
      debuggingEnabled="false"
      maxLogFileSizeInKB="128"
      maxTotalLogFileSizeInKB="1024"
      maxLogFiles="5"
    />
    <security>
      <requestFiltering>
        <!-- Note: node_modules/.next are already hidden by Plesk IIS global config.
             Only add site-level rules here to avoid HTTP 500.19 duplicate key errors. -->
        <fileExtensions>
          <add fileExtension=".env" allowed="false" />
          <add fileExtension=".ts" allowed="false" />
        </fileExtensions>
      </requestFiltering>
    </security>
  </system.webServer>
</configuration>`;
fs.writeFileSync(path.join(pleskBuildDir, 'web.config'), webConfigContent);

console.log('\n✅ Plesk build ready in ./plesk-build folder!');
console.log('👉 To test locally exactly like Plesk:');
console.log('   cd plesk-build');
console.log('   node server.js');
