const {  log_trainer } = require("../../core/db/trainer.schema");
const { handleErrorlog } = require("../../core/utils");

const log_trainer_model_success = async (data,res) => {
    try {
        const {  userID, trainerID, log_description  , eventname, eventId , } = data
        const log_login = await new log_trainer({
            eventname,
            eventId ,
            userID,
            trainerID,
            infotype : 'success',
            log_description

        })
    const userDetails = await log_login.save();
    
    return userDetails
    } catch (error) {
        console.log(error)
        handleErrorlog(error.message)(res)
    }
    
}


const log_trainer_model_failed = async (data,res) => {
    try {
        const {  userID, trainerID, log_description  , eventname, eventId , } = data
        const log_login = await new log_trainer({
            eventname,
            eventId ,
            userID,
            trainerID,
            infotype : 'failed',
            log_description

        })
    const userDetails = await log_login.save();
    
    return userDetails
    } catch (error) {
        console.log(error)
        handleErrorlog(error.message)(res)
    }
    
}


const log_trainer_model_info = async (data,res) => {
    try {
        const {  userID, trainerID, log_description  , eventname, eventId , } = data
        const log_login = await new log_trainer({
            eventname,
            eventId ,
            userID,
            trainerID,
            infotype : 'info',
            log_description

        })
    const userDetails = await log_login.save();
    
    return userDetails
    } catch (error) {
        console.log(error)
        handleErrorlog(error.message)(res)
    }
    
}


const log_trainer_model_warning = async (data,res) => {
    try {
        const {  userID, trainerID, log_description  , eventname, eventId , } = data
        const log_login = await new log_trainer({
            eventname,
            eventId ,
            userID,
            trainerID,
            infotype : 'warning',
            log_description

        })
    const userDetails = await log_login.save();
    
    return userDetails
    } catch (error) {
        console.log(error)
        handleErrorlog(error.message)(res)
    }
    
}






module.exports = {
    log_trainer_model_success, 
    log_trainer_model_failed, 
    log_trainer_model_warning, 
    log_trainer_model_info 
}