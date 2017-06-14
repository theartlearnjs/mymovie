import mongoose from 'mongoose'

let MovieSchema = mongoose.Schema

let Movie = new MovieSchema({
    title: String,
    description : String,
    download_link : String
})

exports.Movie = mongoose.model('Movie',Movie)