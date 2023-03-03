const { userModel } = require("../../../user/core/db/user.schema");
const { trainerModel } = require("../../core/db/trainer.schema");
const { trainer_Banks } = require("../../core/db/trainer.bank");
const { handleError } = require("../../core/utils");
const { log_trainer_model_success } = require("../../../log/app/model/trainer.log");

const create_trainer_bank_model = async (data,res) => {
    try {
        const { trainerId, traineeId,  accountName , accountNumber ,  SB_code ,  accountNickname } = data
    const trainer = await new trainer_Banks({
        traineeId, 
       
            accountName , accountNickname , accountNumber , SB_code , trainerId
      });
    const userDetails = await trainer.save();
      //saving to the log
      const userID = traineeId 
      const trainerID = trainerId
      const eventId = 7
      const eventname = 'bankregistration'
      const log_description = `bank account created`
      const logged_data = { userID ,  log_description , eventname , eventId , trainerID}
      const log_login =  log_trainer_model_success(logged_data,res)
      console.log('this is logged in data')
      //end of saving to the log
    return userDetails
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}

const switch_active_bank_model = async (data,res) => {
    try {
        const { trainerId , bankId } = data
        const updateaffliate = await trainerModel.findByIdAndUpdate({_id:trainerId},  { $set: { 
               active_bank : bankId
        }
        }) 
   
    return updateaffliate
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}

const single_trainer_bank_model = async (data,res) => {
    try {
        const { bankId } = data
        const userData = await trainer_Banks.findById({ _id: bankId });
      

    return userData
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}

const all_trainer_bank_model = async (data,res) => {
    try {
        const { trainerId } = data
        const abank = await trainerModel.findById({ _id: trainerId })
        const active_bank = await trainer_Banks.findById({ _id: abank.active_bank })
        const regular_bank = await trainer_Banks.find({trainerId : trainerId , _id :{ $ne : abank.active_bank }})
        
        const bank = {regular_bank , active_bank}
    return bank
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}

module.exports = {
    create_trainer_bank_model , switch_active_bank_model , single_trainer_bank_model , all_trainer_bank_model
}