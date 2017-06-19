var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path'),
    hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true',
    publicPath = 'http://localhost:4000/'
var config = {
    entry: { // 打包入口
        index: ['./client/src/main.js',hotMiddlewareScript],
        vendor: [  // 将react和react-dom这些单独打包出来，减小打包文件体积
            'react',
            'react-dom'
        ]
    },
    output: { // 打包目标路径
        path: path.join(__dirname,'/client/dist'),
        filename: 'scripts/[name].js',
        publicPath: publicPath
    },
    module:{
        rules: [{
            test: /\.js|.jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test: /\.(less|css)$/,  // 打包sass和css文件
            use: ExtractTextPlugin.extract({use: 'style-loader', use: 'css-loader!postcss-loader!less-loader'})
        },
        {
            test: /\.(png|jpg|jpng|eot|ttf|woff|svg)$/, // 打包图片和字体文件
            use: 'url-loader?limit=8192&name=images/[name].[ext]'
        }] 
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', 
            filename: 'scripts/vendor.bundle.js'
        }), //这是之前单独打包出来的react、react-dom等文件
        new ExtractTextPlugin('styles/index.css'), // 将所有sass/css文件打包成一个index.css文件
        new webpack.DefinePlugin({
            'process.env': { 
                NODE_ENV: JSON.stringify('production') 
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ // 压缩打包后的代码
            compress: {
                warnings: false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}

module.exports = config