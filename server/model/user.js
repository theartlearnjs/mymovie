import mongoose from 'mongoose'

let UserSchema = mongoose.Schema

let User = new UserSchema({
    email : String,
    name : String,
    password : String
})

exports.User = mongoose.model('User',User)