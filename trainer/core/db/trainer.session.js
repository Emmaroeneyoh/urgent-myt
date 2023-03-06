const mongoose = require('mongoose')
const schema = mongoose.Schema

const trainee_schema = new schema({
    traineeId:{
        type:  mongoose.Schema.Types.ObjectId,
        ref:'trainee'
        
    },
    trainerId:{
        type:  mongoose.Schema.Types.ObjectId,
        ref:'trainer'
        
    },
    category: {
        category_name: {
             type : String
         },
         default_category: {
             type : Boolean, 
             false : true
         }
        
    },
    sub_category: {
        sub_category_name: {
             type : String
         },
         default_sub_category: {
             type : Boolean, 
             false : true
         }
        
    },
    variant: {
        variant_name: {
             type : String
         },
         default_variant: {
             type : Boolean, 
             false : true
         }
        
    },
    slot: {
        type: Number,
    },
  
   age: {
       min: {
           type: Number, 
           default : 0
        },
       max: {
           type: Number, 
           default : 100
        },
    },
   
    session_type: {

    },
    
    //if this is true then the trainer has added one category
    added_category: {
        type: Boolean,
        default : false
    },
    

    //session profile 1 starts
    session_image: {
        default : '',
        type: String
    },

    session_description: {
        default : '',
        type: String
    },

    session_profile1: {
        type: Boolean,
        default : false
    },

   //session profile 1 end
    
    //session profile 2 starts
    subscription_type: {
        default: {},
        type: Object,
        
        
    },
   mark_attendance: {
       type: String,
       default : ''
        
    },
    session_profile2: {
        type: Boolean,
        default : false
    },
   
    //session profile 2 ends

    //session profile 3 starts
 
    date_range: {
        start_date: {
            type: String,
            default : ""
        },
        end_date: {
            type: String,
            default : ""
        }
    },
    time_range: {
        start_time: {
            type: String,
            default : ""
        },
        end_time: {
            type: String,
            default : ""
        }
    },
    curriculum_type: {
        type: String,
            default : ""
    },
    
    custom_time: {
        type: Boolean,
        default : false
        
    },
    curriculum: [{}],
    curriculum_duration: {
        default: 0,
        type : Number
    },
    session_profile3: {
        type: Boolean,
        default : false
        
    },
    
    //session profile 3 ends

    //session profile 4 starts
     
   
    // session_profile4: {
    //     type: Boolean,
    //     default : false
        
    // },
    // curriculum_type: {
    //     default: '',
    //     type : String
    // } ,
    // curriculum_duration: {
    //     default: 0,
    //     type : Number
    // } ,
    
    // //session profile 3 starts
    // days_of_occurence: {
    //     default: [] ,
    //     type : Array
    // },
    // type_of_occurence: {
    //     type: String,
    //     default : ""
    // },
    // time_of_occurence: {
    //     start_time: {
    //         type: String,
    //         default : ""
    //     },
    //     end_time: {
    //         type: String,
    //         default : ""
    //     }
        
    // },
   
    
    // session_profile3: {
    //     type: Boolean,
    //     default : false
        
    // },
    
    // //session profile 3 ends

    // //session profile 4 starts
    // curriculum:[{}], 
   
       
   
    // session_profile4: {
    //     type: Boolean,
    //     default : false
        
    // },
    // curriculum_type: {
    //     default: '',
    //     type : String
    // } ,
    // curriculum_duration: {
    //     default: 0,
    //     type : Number
    // } ,
    
    //session profile 4 ends

    //session profile 5 starts
    pricing: {
        default : []
    },

    pricing_method: {
        default : ''
    },

    course_bank:{
       default : ''
        
    },

    fee_management: {
        who_pays : {
            type: String,
            default :''
        },
        cancellation_fee : {
           type : String,
           default :''
        }
    },
   
    session_profile4: {
        type: Boolean,
        default : false
        
    },
    
    //session profile 5 ends

    //if this is true then the trainer has completely created a session

    session_profile_completed: {
        type: Boolean,
        default : false
        
    },

    createdAt : {
        type: Date,
        default:Date.now
    }
    
}, { minimize: false })
const trainersession = mongoose.model('trainer_session', trainee_schema )
module.exports = {
    trainersession
}