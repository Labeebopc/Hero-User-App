const mongoose = require('mongoose')

const Schema = mongoose.Schema


const PostSchema = new Schema({

    postImage: { type: String },
    description: { type: String, required: [true, "Please provide description"] },
    date: { type: String },
    likes: Number

})

module.exports = { PostSchema }