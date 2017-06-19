import mongoose from 'mongoose'

let MovieSchema = new mongoose.Schema({
    name: String,
    englishName:String,
    imgAddress : String,
    year : String,
    score: String,
    scoreNum: String,
    duration: Date,
    country: String,
    director: String,
    strring: String
})

let Movie = mongoose.model('Movie',MovieSchema)
let MovieDAO = function(){}

MovieDAO.prototype.save = function(obj,callback){
    let newMovie = new Movie(obj)
    newMovie.save(function(err){
        callback(err)
    })
}

module.exports = new MovieDAO();
