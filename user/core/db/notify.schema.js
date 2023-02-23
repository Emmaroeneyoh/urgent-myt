const mongoose = require('mongoose')
const schema = mongoose.Schema

const notification_schema = new schema({
   
    notification:{
        type:String,
    },
    traineeId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainee'
    },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const notificationschema = mongoose.model('notification', notification_schema )
module.exports = {
    notificationschema
}