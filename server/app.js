import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import ejs from 'ejs'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfig from '../webpack.config.js'
import opn from 'opn'
// import mongoose from 'mongoose'

//webpack hmr
let compiler = webpack(webpackDevConfig)
const port = 4000
let app = express()
app.use(webpackDevMiddleware(compiler,{
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        color: true
    }
}))
app.use(webpackHotMiddleware(compiler))

//connect database
// mongoose.connect('mongodb://localhost:27017/movie')
// var db = mongoose.connection
//     db.on('error', console.error.bind(console, 'connection error:'))
//     db.once('open', function (callback) {
//     console.log('MongoDB Opened!')
//     });

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

let appData = require('./data.json')
let movie = appData.movie
console.log(movie)

// view setup
app.set('views', path.join(__dirname, '../client/dist'))
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
app.use(logger('dev')) //命令行里面显示请求
app.use(bodyParser.json()) //解析json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser()) //解析cookie
app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('/', (req, res) => {
    // res.render('index')
    res.json({
        errno: 0,
        data: movie
    });
})

app.listen(port, () => {
    console.log('server is running on port 4000')
    // opn('http://localhost:' + port)
})
