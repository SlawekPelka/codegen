module.exports = {
    entry: './src/lib/main.ts',
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist/"
    },
    node: {
        fs: 'empty'
    },
    target: 'node',
    devtool: 'source-map'
};