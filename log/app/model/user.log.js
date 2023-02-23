const { log_user } = require("../../core/db/user.schema");

const { handleErrorlog } = require("../../core/utils");

const log_user_model_success = async (data,res) => {
    try {
        const {  userID, log_description ,  eventname , eventId } = data
        const log_login = await new log_user({
            eventId,
            userID,
            log_description, 
            infotype : 'success',
            eventname
        })
    const userDetails = await log_login.save();
    
    return userDetails
    } catch (error) {
        console.log(error)
        handleErrorlog(error.message)(res)
    }
    
}
const log_user_model_warning = async (data,res) => {
    try {
        const {  userID, log_description ,  eventname , eventId } = data
        const log_login = await new log_user({
            eventId,
            userID,
            log_description, 
            infotype : 'warning',
            eventname
        })
    const userDetails = await log_login.save();
    
    return userDetails
    } catch (error) {
        console.log(error)
        handleErrorlog(error.message)(res)
    }
    
}
const log_user_model_info = async (data,res) => {
    try {
        const {  userID, log_description ,  eventname , eventId } = data
        const log_login = await new log_user({
            userID,
            log_description, 
            infotype : 'info',
            eventname,
            eventId
        })
    const userDetails = await log_login.save();
    
    return userDetails
    } catch (error) {
        console.log(error)
        handleErrorlog(error.message)(res)
    }
    
}
const log_user_model_failed = async (data,res) => {
    try {
        const {  userID, log_description ,  eventname , eventId } = data
        const log_login = await new log_user({
            
            userID,
            log_description, 
            infotype : 'failed',
            eventname,
            eventId
        })
    const userDetails = await log_login.save();
    
    return userDetails
    } catch (error) {
        console.log(error)
        handleErrorlog(error.message)(res)
    }
    
}


module.exports = {
    log_user_model_success,
    log_user_model_info,
    log_user_model_warning,
    log_user_model_failed,
}
