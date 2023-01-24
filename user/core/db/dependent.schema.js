const { string } = require('joi')
const mongoose = require('mongoose')
const schema = mongoose.Schema

const dependent_schema = new schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
   
    socialNumber: {
        type:Number
    } ,
    traineeId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainee'
    },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const dependentModel = mongoose.model('dependent', dependent_schema )
module.exports = {
    dependentModel
}