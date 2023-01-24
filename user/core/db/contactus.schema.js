const { string } = require('joi')
const mongoose = require('mongoose')
const schema = mongoose.Schema

const dependent_schema = new schema({
    firstname:{
        type:String,
    },
  
    lastname:{
        type:String,
    },
    email:{
        type:String,
    },
    message:{
        type:String,
    },
    phone:{
        type:Number,
    },
  
   
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const contactModel = mongoose.model('contactUs', dependent_schema )
module.exports = {
    contactModel
}