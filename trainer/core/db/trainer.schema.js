const { string } = require('joi')
const mongoose = require('mongoose')
const schema = mongoose.Schema

const trainee_schema = new schema({
    traineeId:{
        type:  mongoose.Schema.Types.ObjectId,
        ref:'trainee'
        
    },
    active_bank: {
        type: String,
        default  :"null"
        
 },
    affliateId: {
        type: String,
        
    },
    profile1: {
        role: {
            type: String,
            
        },
        bio: {
            type: String,
            
        },
        experience_level: {
            type: String,
            
        },
      
    },
    profile1_complete: {
        type: Boolean,
        default : false
        
    },
    
    work_experience: [{
        title: {
            type: String,
                
        },
        company: {
            type: String,
                
        },
        recent_work: {
            type: Boolean,
            default: false
                
        },
        start_date: {
            type: String,
                
        },
        end_date: {
            type: String,
                
        },
        job_skills: {
            type: String,
                
        },
        role_accomplishment: {
            type: String,
                
        },
    }],
        
        
        profile2_complete: {
            type: Boolean,
            default : false
            
        },
    

    education_degree: [
        {
            educational_background: {
                type: String,
                
            },
            place_of_qaulification: {
                type: String,
                
            },
            in_view: {
                type: Boolean,
                default : false
                
            },
            graduation_year: {
                type: String,
                
            },
            describe_learning: {
                type: String,
                
            },
           
        }
    ],
    profile3_complete: {
        type: Boolean,
        default : false
        
    },
   
        skills: [''],
       
   
    profile4_complete: {
        type: Boolean,
        default : false
        
    },
    educational_background: {
        type: String,
        default : ''
        
    },
    profile5_complete: {
        type: Boolean,
        default : false
        
    },
    profile_completion: {
        type: Boolean,
         default : false
    },
 
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const trainerModel = mongoose.model('trainer', trainee_schema )
module.exports = {
    trainerModel
}