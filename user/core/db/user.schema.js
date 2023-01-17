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
        latitude:{
            type:String
        },
        longitude:{
            type:String
        },
    } ,
    // passwordVerification: {
    //     token:{
    //         type: String ,
    //         default : ''
    //     },
    //     date:{
    //         type: Number,
    //         default: ''
    //     },
      
    // } ,
    // affliate: {
    //     affliate_sign_in:{
    //         type: Boolean,
    //         default :  false
    //     },
    //     affliate_id:{
    //         type:String
    //     },
    //     affliate_code:{
    //         type:String
    //     },
    // } , 
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