const { number } = require('joi')
const mongoose = require('mongoose')
const schema = mongoose.Schema

const affliate_schema = new schema({
   
    
    traineeId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainee'
    },
    trainerId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainer'
    },
    sessionId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainer_session'
    },
 
    pricing_plan: {
        number_of_attendee: {
            type : String
        },
        
        total_amount: {
            type : Number
        }
        
        
 },
    applicant: {
       type_of_applicant: {
            type : String
        },
        
        applicantId: {
            type : String
        }
        
        
 },
    
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const sessionpayment_model = mongoose.model('session_payment', affliate_schema )
module.exports = {
    sessionpayment_model
}