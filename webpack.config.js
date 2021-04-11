var Encore = require('@symfony/webpack-encore');
var path = require('path');
var pkg = require('./package.json');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('dist')
    .setPublicPath('/dist')
    .addEntry('toolkit', './src/js/index.js')
    .addStyleEntry('colors', './src/css/colors.scss')
    .addStyleEntry('fonts', './src/css/fonts.scss')
    .addStyleEntry('icons', './src/css/icons.scss')
    .disableSingleRuntimeChunk()
    //.cleanupOutputBeforeBuild()
    //.enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    //.enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .configureDevServerOptions(options => {
        options.contentBase = [
            path.join(__dirname, 'node_modules', 'bootstrap', 'dist'),
            path.join(__dirname, 'html')
        ];
        options.contentBasePublicPath = [
            '/vendor/bootstrap',
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

module.exports = Encore.getWebpackConfig();
