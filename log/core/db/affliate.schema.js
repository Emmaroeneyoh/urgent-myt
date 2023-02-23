const mongoose = require('mongoose')
const schema = mongoose.Schema

const dependent_schema = new schema({
   
    eventname:{
        type:String,
    },
    eventId:{
        type:Number,
    },
    infotype:{
        type:String,
    },
    userID:{
        type:String,
    },
    affliateID:{
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
const log_affliate = mongoose.model('log_affliate', dependent_schema )
module.exports = {
    log_affliate
}