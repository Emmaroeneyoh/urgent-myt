const mongoose = require('mongoose')
const schema = mongoose.Schema

const dependent_schema = new schema({
   
    email:{
        type:String,
    },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const newsletterschema = mongoose.model('newsletter', dependent_schema )
module.exports = {
    newsletterschema
}