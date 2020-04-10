const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'webfuse.js',
        library: 'webfuse',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist')
    }
};
