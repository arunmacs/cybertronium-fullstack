import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://res.cloudinary.com https://avatars.githubusercontent.com https://lh3.googleusercontent.com https://purecatamphetamine.github.io/;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://www.google.com https://recaptcha.google.com;
    connect-src 'self' http://localhost:3000 https://www.cybertronium.com https://cybertronium.com https://api.emailjs.com https://docs.google.com;
    upgrade-insecure-requests;
`

const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  // Vercel-specific: trust all proxy headers for correct URL resolution
  // (needed for NEXTAUTH_URL in production behind Vercel's edge)
  output: "standalone",

  typescript: { ignoreBuildErrors: true },

  experimental: {
    // Suppress the multiple-lockfiles workspace root warning
    // (we have cms-cybertronium/package-lock.json and a parent package-lock.json)
  },

  async headers() {
    return [
      {
        // Match all API and page routes
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Content-Security-Policy", value: contentSecurityPolicyHeaderValue }
        ],
      },
    ];
  },

  // Allow <img> tags to load avatars from any HTTPS source
  // Replace with specific domains for stricter production security:
  // { hostname: "avatars.githubusercontent.com" }, etc.
  images: {
    disableStaticImages: true,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },

  turbopack: {
    root: process.cwd(),
    rules: {
      "*.pdf": {
        type: "asset",
      },
      "*.svg": [
        {
          condition: { query: /(^|&)react($|&)/ },
          loaders: [
            {
              loader: "@svgr/webpack",
              options: {
                icon: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                        },
                      },
                    },
                    "prefixIds",
                  ],
                },
              },
            },
          ],
          as: "*.js",
        },
        {
          type: "asset",
        },
      ],
    },
  },

  webpack(config) {
    // 1. Grab Next.js's built-in file loader rule for SVGs
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      // 2. Reapply Next.js's built-in rule, but ONLY for standard imports (no ?react)
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: [...(fileLoaderRule?.resourceQuery?.not || []), /react/] },
      },
      // 3. Convert ?react SVGs to React Components (SVGR)
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule?.issuer,
        resourceQuery: /react/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  'prefixIds'
                ],
              },
            },
          },
        ],
      }
    );

    // 4. Disable the default Next.js SVG rule completely, as we've taken over
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },

};

export default nextConfig;

