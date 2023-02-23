const mongoose = require('mongoose')
const schema = mongoose.Schema

const dependent_schema = new schema({
    
    eventname:{
        type:String,
    },
    infotype:{
        type:String,
    },
    userID:{
        type:String,
    },
    log_description:{
        type:String,
    },

    createdAt : {
        type: Date,
        default:Date.now
    }
})
const log_admin = mongoose.model('log_admin', dependent_schema )
module.exports = {
    log_admin
}