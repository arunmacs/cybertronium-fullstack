const { optimize } = require('svgo');
const fs = require('fs');

const svg1 = fs.readFileSync('./src/assets/services/minimized-attack-surface.svg', 'utf8');
const svg2 = fs.readFileSync('./src/assets/services/enhanced-productivity.svg', 'utf8');

const config = {
  path: 'enhanced-productivity.svg',
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
  ]
};

const result1 = optimize(svg1, { ...config, path: 'minimized-attack-surface.svg' });
console.log("MINIMIZED:\n", result1.data);

const result2 = optimize(svg2, { ...config, path: 'enhanced-productivity.svg' });
console.log("\nENHANCED:\n", result2.data);
