// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');


// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, '../client/dist'));
// app.set('view engine', 'html');
// app.engine('html', ejs.renderFile);

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../client/dist')));

// var port = 4000
// app.all("*", function(req, res) {
//     res.render("index");
// })
// app.listen(port, function() {
//     console.log("server is running on port 4000");
// });

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import ejs from 'ejs'

let app = express()
const port = 4000

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
    res.render('index')
})
app.listen(port, () => {
    console.log('server is running on port 4000')
})