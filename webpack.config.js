const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        modules: './scripts/modules/index.ts',
        services: './scripts/services/index.ts',
        models: './scripts/models/index.ts',
        app: './scripts/app.ts'
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
    },
    plugins: [
        // new UglifyJSPlugin()
    ]
};

function _resolve(_path) {
    return path.resolve(__dirname, _path);
}