const { affliate_model } = require("../../../affliate/core/db/affliate.schema");
const { log_affliate_model_success } = require("../../../log/app/model/affliate.log");
const { log_trainer_model_success } = require("../../../log/app/model/trainer.log");
const {  log_user_model_success } = require("../../../log/app/model/user.log");
const { userModel } = require("../../../user/core/db/user.schema");
const { trainerModel } = require("../../core/db/trainer.schema");
const { handleError } = require("../../core/utils");

const signup_Trainer_affliate_Model = async (data,res) => {
    try {
        const { traineeId, promocode } = data
        
        //find the affliate
        const affliate = await affliate_model.findOne({ promocode: promocode })
        //end of finding the affliate
    
    const form = await new trainerModel({
       traineeId,
       affliateId:  affliate._id
    });
        
        const trainerDetails = await form.save()

            //saving to the log
        const trainerID = trainerDetails._id
        
    const EventName = 'registration'
    const Log_Description = `a trainer account has successfully been registered`
    const Logged_Data = { userID : traineeId , log_description : Log_Description , eventname : EventName , eventId : 1 , trainerID}
    const Log_Login =  log_trainer_model_success(Logged_Data,res)
    console.log('this is logged in data')
    //end of saving to the log

         //updating the user to add trainer role
         const updateUser = await userModel.findByIdAndUpdate({_id:traineeId}, {
            $push : {
                roles: "trainer"
            }
        })
        
               //saving to the log
    const useriD = traineeId
    const eventid = 9
    const eventName = 'becometrainer'
    const log_Description = `user has registered has a trainer into our system`
    const Logged_data = { userID : useriD , log_description : log_Description , eventname : eventName , eventId : eventid}
    const Log_login =  log_user_model_success(Logged_data,res)
    console.log('this is logged in data')
    //end of saving to the log
        //end of updating the user to update the trainer role

        //updating the affliate account too
        const updateAffliate = await  affliate_model.findByIdAndUpdate(affliate._id, {
            $push: {
                trainers: {
                    trainerId: form._id
                }
            }
        })


           //saving to the log of the affliate
    const userID = traineeId 
    const affliateID = affliate._id
    const eventId = 5
    const eventname = 'affliatetrainer'
    const log_description = ` an affliate account has successfully been linked to a trainer `
    const logged_data = { userID , log_description , eventname , eventId , affliateID}
    const log_login =  log_affliate_model_success(logged_data,res)
    console.log('this is logged in data')
    //end of saving to the log

        //end of updating the affliate account too
        
   
 
      
    return trainerDetails
    } catch (error) {
        handleError(error.message)(res)
    }
    
}
const signup_Trainer_Model = async (data,res) => {
    try {
        const { traineeId } = data
        
       
    
    const form = await new trainerModel({
       traineeId,
       affliateId: 'null'
    });
        
        const trainerDetails = await form.save()

            //saving to the log
        const trainerID = trainerDetails._id
    const EventName = 'registration'
    const Log_Description = `a trainer account has successfully been registered`
    const Logged_Data = { userID : traineeId , log_description : Log_Description , eventname : EventName , eventId : 1 , trainerID}
    const Log_Login =  log_trainer_model_success(Logged_Data,res)
    console.log('this is logged in data')
    //end of saving to the log

         //updating the user to add trainer role
         const updateUser = await userModel.findByIdAndUpdate({_id:traineeId}, {
            $push : {
                roles: "trainer"
            }
        })
        
               //saving to the log
    const useriD = traineeId
    const eventid = 9
    const eventName = 'becometrainer'
    const log_Description = `user has registered has a trainer into our system`
    const Logged_data = { userID : useriD , log_description : log_Description , eventname : eventName , eventId : eventid}
    const Log_login =  log_user_model_success(Logged_data,res)
    console.log('this is logged in data')
    //end of saving to the log
        //end of updating the user to update the trainer role

      
        
   
 
      
    return trainerDetails
    } catch (error) {
        handleError(error.message)(res)
    }
    
}

module.exports = {
    signup_Trainer_affliate_Model , signup_Trainer_Model
}