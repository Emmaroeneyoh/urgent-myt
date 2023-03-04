const { string } = require('joi')
const mongoose = require('mongoose')
const schema = mongoose.Schema

const trainee_schema = new schema({
    name:{
        type:String,
    },
    email: {
        type:String,
        required:[true, 'please choose a body']
    },
    password:{
        type:String
    },
    location: {
        type:String
    } ,
    phoneNumber: {
        
        type: String,
        default : ''
    } ,
    socialNumber: {
        
        type: String,
        default : ''
    } ,
    profile_img: {
        
        type: String,
        default : ''
    } ,
    dependent: {
        default: [],
        type: [
            {
               
                dependentId: {
                    type:  mongoose.Schema.Types.ObjectId,
                     ref:'dependent'
                }
            }
        ]
    }, 
   roles:{
        type: Array,
    },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const userModel = mongoose.model('trainee', trainee_schema )
module.exports = {
    userModel
}