const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');       //node에서 path라는 모듈(스크립트)을 사용
const VueLoader = require('vue-loader');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue']
    },
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader',
        },
        {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',  //entry > app의 이름을 name에 가져옴 
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',

    }
}