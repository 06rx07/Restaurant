const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        models: './scripts/models/index.ts',
        app: './scripts/index.ts'
    },
    output: {
        path: _resolve('dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};

function _resolve(_path) {
    return path.resolve(__dirname, _path);
}