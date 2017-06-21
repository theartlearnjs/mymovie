import mongoose from 'mongoose'

var MovieSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    englishName:String,
    imgAddress : String,
    year : Number,
    score: Number,
    scoreNum: String,
    duration: Number,
    country: String,
    director: String,
    strring: String
},{collection:'movies'})

let Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie
// let MovieDAO = function(){}

// MovieDAO.prototype.save = function(obj){
//     let newMovie = new Movie(obj)
//     newMovie.save(function(){
//         console.log('err')
//     })
// }

// module.exports = new MovieDAO()
