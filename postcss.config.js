const path = require('path');

module.exports = {
    plugins: [
        //require('postcss-preset-env')({ features: { 'cascade-layers': false }}),
        require('postcss-mixins')({ mixinsDir: path.join(__dirname, 'src', 'css', 'mixins')}),
        require('autoprefixer'),
        require('postcss-nested')
    ]
}