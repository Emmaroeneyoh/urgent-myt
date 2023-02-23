
const { log_dependent_Model } = require("../../core/db/admin.schema");
const { handleErrorlog } = require("../../core/utils");

const logs_dependent_model = async (data,res) => {
    try {
        const { username, userID, dependantID ,log_description } = data
        const log_login = await new log_dependent_Model({
            username,
            userID,
            dependantID ,
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
    logs_dependent_model
}
