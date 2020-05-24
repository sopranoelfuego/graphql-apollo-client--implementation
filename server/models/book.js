const mongoose=require('mongoose')
const schema=mongoose.Schema({
    name:String,
    genre:String,
    authorID:String
})

module.exports =mongoose.model('Book',schema)