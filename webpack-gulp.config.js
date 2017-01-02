var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                exclude: /node_modules/,
                test: /\.liquid/,
                loader: 'file-loader?name=layout/[name].[ext]'
            },
            {
                exclude: /node_modules/,
                test: /\.html/,
                loader: 'file-loader?name=[name].[ext]'
            },
            { 
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/, 
                loader: "babel", 
                query:
                  {
                    presets:['react']
                  }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: './'
    },
    plugins: [
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ 'vendor', /* filename= */ 'assets/vendor.bundle.js')
  ]
};
