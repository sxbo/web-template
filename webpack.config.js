const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.jsx?$/,
                //不编译node_modules文件夹内的js 
                exclude: /node_modules/,
                use: ['babel-loader']
            }
           
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({ //默认会生成index.html
            //指定本地index.html
            template: __dirname+'/src/index.html' 
        })
    ],
};