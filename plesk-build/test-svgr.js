const { transform } = require('@svgr/core');
const fs = require('fs');

const svgCode = fs.readFileSync('./src/assets/services/regulatory-compliance.svg', 'utf8');

const options = {
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
      'prefixIds',
    ],
  },
};

transform(svgCode, options, { componentName: 'MyIcon', filePath: './src/assets/services/regulatory-compliance.svg' }).then(jsCode => {
  console.log(jsCode);
});
