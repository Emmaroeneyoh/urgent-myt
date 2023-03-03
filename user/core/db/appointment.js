const { string } = require('joi')
const mongoose = require('mongoose')
const schema = mongoose.Schema

const trainee_schema = new schema({
    sessionId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainer_session'
    },
    trainerId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainer'
    } ,
    traineeId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainee'
    } ,
    complaint_end: {
        type : String
    },
    is_completed: {
        type: Boolean,
        default : false
    } ,
    attendanceCount: {
        type: Number,
        default : 0
    } ,
  
        category: {
            type: String,
        } ,
        city: {
            type: String,
        } ,
  
        duration: {
            type: Number,
        } ,
        progress: {
            type: Number,
            default : 0
        } ,
        progress_count: {
            type: Number,
        } ,
    
    schedule: {
       default : [] 
    },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const appointmentModel = mongoose.model('trainee_appointment', trainee_schema )
module.exports = {
    appointmentModel
}