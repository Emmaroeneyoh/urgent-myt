// const { log_affliate_model, log_affliate_bank_model } = require("../../../log/app/model/affliate.log");
const { log_affliate_model_success } = require("../../../log/app/model/affliate.log");
const { userModel } = require("../../../user/core/db/user.schema");
const { affliate_model } = require("../../core/db/affliate.schema");
const { affliate_Banks } = require("../../core/db/affliate_banks");
const { handleError } = require("../../core/utils");

const create_affliate_bank_model = async (data,res) => {
    try {
        const { affliateId, traineeId,  accountName , accountNumber ,  SB_code ,  accountNickname } = data
        const userData = await userModel.findById({ _id:traineeId});
    const affliate = await new affliate_Banks({
        traineeId, 
       
            accountName , accountNickname , accountNumber , SB_code , affliateId
      });
    const userDetails = await affliate.save();
      //saving to the log
      const userID = traineeId 
      const affliateID = affliateId
      const eventId = 2
      const eventname = 'bankregistration'
      const log_description = `bank account created`
      const logged_data = { userID ,  log_description , eventname , eventId , affliateID}
      const log_login =  log_affliate_model_success(logged_data,res)
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
        const { affliateId , bankId } = data
        const updateaffliate = await affliate_model.findByIdAndUpdate({_id:affliateId},  { $set: { 
            active_bank :  bankId
        }
        }) 
   
    return updateaffliate
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}

const single_affliate_bank_model = async (data,res) => {
    try {
        const { bankId } = data
        const userData = await affliate_Banks.findById({ _id: bankId });
      

    return userData
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}

const all_affliate_bank_model = async (data,res) => {
    try {
        const { affliateId } = data
        const abank = await affliate_model.findById({ _id: affliateId })
        const active_bank = await affliate_Banks.findById({ _id: abank.active_bank })
        const regular_bank = await affliate_Banks.find({affliateId : affliateId , _id :{ $ne : abank.active_bank }})
        
        const bank = {regular_bank , active_bank}
    return bank
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}

module.exports = {
    create_affliate_bank_model , switch_active_bank_model , single_affliate_bank_model , all_affliate_bank_model
}