const Encore = require('@symfony/webpack-encore');
const RemovePlugin = require('remove-files-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

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
    .enableSassLoader()
    .configureDevServerOptions(options => {
        options.contentBase = [
            path.join(__dirname, 'var/test-site')
        ];
        options.contentBasePublicPath = [
            '/'
        ];
        options.liveReload = false;
        options.serveIndex = true;
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
    log: false
  }
}));

module.exports = config;
