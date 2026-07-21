const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.join(__dirname, '..');
const pleskBuildDir = path.join(projectRoot, 'plesk-build');

// 1. Run standard build
console.log('📦 Starting standard Next.js standalone build...');
execSync('npm run build', { cwd: projectRoot, stdio: 'inherit' });

// 2. Ensure plesk-build directory exists
console.log('\n🧹 Preparing plesk-build directory...');
if (!fs.existsSync(pleskBuildDir)) {
  fs.mkdirSync(pleskBuildDir, { recursive: true });
}

// 3. Copy .next/standalone to plesk-build
console.log('📁 Copying standalone build files...');
const standaloneDir = path.join(projectRoot, '.next', 'standalone');
fs.cpSync(standaloneDir, pleskBuildDir, { recursive: true });

// 4. Copy public to plesk-build/public
console.log('🖼️ Copying public assets...');
const publicDir = path.join(projectRoot, 'public');
fs.cpSync(publicDir, path.join(pleskBuildDir, 'public'), { recursive: true });

// 5. Copy .next/static to plesk-build/.next/static
console.log('✨ Copying static assets...');
const staticDir = path.join(projectRoot, '.next', 'static');
fs.cpSync(staticDir, path.join(pleskBuildDir, '.next', 'static'), { recursive: true });

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

console.log('\n✅ Plesk build ready in ./plesk-build folder!');
console.log('👉 To test locally exactly like Plesk:');
console.log('   cd plesk-build');
console.log('   node server.js');
