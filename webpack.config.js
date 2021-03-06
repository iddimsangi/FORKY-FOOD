const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:['@babel/polyfill','./src/js/index.js'],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/bundle.js'
    },
    mode:'development',
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
   new HtmlWebPackPlugin({
       filename:'index.html',
       template:'./src/index.html'
   })
    ],
    module: {
        rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: '/node_modules/'
                }
            
        ]
    }
}