var mongoose = require('mongoose')
// import Movie from './model/movie'
//connect database

let insertData = (db,callback)=>{
    var collection = db.collection('movies')
    var data = require('./data.json')
    collection.insert(data,(err,result)=>{
        if(err){
            console.log('error'+err)
            return
        }
        callback(result)
    })
}

mongoose.connect('mongodb://localhost:27017/douban')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    insertData(db,(result)=>{
        console.log(result)
    })
})
db.close()