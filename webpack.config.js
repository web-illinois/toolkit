const Encore = require('@symfony/webpack-encore');
const RemovePlugin = require('remove-files-webpack-plugin');
const path = require('path');

const pkg = require('./package.json');
const colors = require('./api/colors.json')

function makeSassList(name, values) {
  return "$" + name + ":\n  " + values.join(",\n  ") + ";\n\n";
}

function makeSassVariables() {
  const colorVars = Object.keys(colors).map(c => `"${c}" ${colors[c]}`);
  return makeSassList('colors', colorVars);
}

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('dist')
  .setPublicPath('/')
  .addEntry('toolkit', './src/js/index.js')
  .addStyleEntry('colors', './src/css/colors.scss')
  .addStyleEntry('fonts', './src/css/fonts.scss')
  .addStyleEntry('icons', './src/css/icons.scss')
  .disableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  .enableSassLoader(options => {
    return {
      prependData: makeSassVariables
    }
  })
  .configureDevServerOptions(options => {
      options.contentBase = [
          path.join(__dirname, 'var/test-site')
      ];
      options.contentBasePublicPath = [
          '/'
      ];
      options.liveReload = false;
      options.serveIndex = true;
      options.disableHostCheck = true;
  })
;

if (Encore.isProduction()) {
  Encore.setPublicPath('https://cdn.brand.illinois.edu/' + pkg.name + '/' + pkg.version);
  Encore.setManifestKeyPrefix('il-web/');
}

const config = Encore.getWebpackConfig();

config.plugins.push(new RemovePlugin({
  after: {
    include: [
      './dist/manifest.json',
      './dist/entrypoints.json'
    ],
    log: false,
    logWarning: false
  }
}));

module.exports = config;
