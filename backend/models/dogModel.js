const mongoose = require('mongoose')

const dogSchema  = mongoose.Schema({
    name :{
        type : String,
        required : [true, 'Please add name of the dog']
    },
    birthDate :{
        type : String,
        required : [true, 'Please add birth date of the dog']
    },
}, {
    timestamps : true
    })
module.exports = mongoose.model('Dog',dogSchema)