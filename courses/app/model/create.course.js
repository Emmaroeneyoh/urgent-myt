const { category_model } = require("../../core/db/course.schema");
const { handleError } = require("../../core/utils");



const create_category_Model = async (data,res) => {
    try {
        const { category, subcategory, variant, country, city } = data
       
    
    const form = await new category_model({
      category,  subcategory , variant , country , city
        
    });
        
        const trainerDetails = await form.save()

    //         //saving to the log
    //     const trainerID = trainerDetails._id
        
    // const EventName = 'registration'
    // const Log_Description = `a trainer account has successfully been registered`
    // const Logged_Data = { userID : traineeId , log_description : Log_Description , eventname : EventName , eventId : 1 , trainerID}
    // const Log_Login =  log_trainer_model_success(Logged_Data,res)
    // console.log('this is logged in data')
    // //end of saving to the log


    return trainerDetails
    } catch (error) {
        handleError(error.message)(res)
    }
    
}

module.exports = {
    create_category_Model
}