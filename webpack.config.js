var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
})

module.exports = {
    entry: './src/js/enter.js',
    output:{
        path: __dirname + '/out',
        publicPath: 'http://localhost:8080/out/',
        filename: 'index.js'
    },
    module:{
        loaders:[
            {
                test : /.js$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                },
                exclude: /node_modules/
            },{
                test : /.less$/, 
                use: ['style-loader', 'css-loader', 'less-loader']
            },{
                test : /.(jpg|png|jpeg)$/, 
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            }
        ]
    },
    plugins: [providePlugin]
}