const {  log_affliate } = require("../../core/db/affliate.schema");
const { handleErrorlog } = require("../../core/utils");

const log_affliate_model_success = async (data,res) => {
    try {
        const {  userID, affliateID, log_description  , eventname, eventId , } = data
        const log_login = await new log_affliate({
            eventname,
            eventId ,
            userID,
            affliateID,
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


const log_affliate_model_failed = async (data,res) => {
    try {
        const {  userID, affliateID, log_description  , eventname, eventId , } = data
        const log_login = await new log_affliate({
            eventname,
            eventId ,
            userID,
            affliateID,
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


const log_affliate_model_info = async (data,res) => {
    try {
        const {  userID, affliateID, log_description  , eventname, eventId , } = data
        const log_login = await new log_affliate({
            eventname,
            eventId ,
            userID,
            affliateID,
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


const log_affliate_model_warning = async (data,res) => {
    try {
        const {  userID, affliateID, log_description  , eventname, eventId , } = data
        const log_login = await new log_affliate({
            eventname,
            eventId ,
            userID,
            affliateID,
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
    log_affliate_model_success, 
    log_affliate_model_failed, 
    log_affliate_model_warning, 
    log_affliate_model_info 
}