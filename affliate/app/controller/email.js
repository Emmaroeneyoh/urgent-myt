const { log_affliate_model_failed, log_affliate_model_success } = require("../../../log/app/model/affliate.log");
const { affliate_model } = require("../../core/db/affliate.schema");

const { handleError } = require("../../core/utils");
const { send_affliate_link_to_trainer_model } = require("../model/email");



const send_affliate_link_to_trainer_controller = async (req, res, next) => {
  const { promocode , email , traineeId } = req.body;
  try {
 
    const affliate = await affliate_model.findOne({ promocode: promocode });
    if (!affliate) {
         //saving to the log
     const userID = traineeId 
     const affliateID = 'null' 
     const eventId = 3
     const eventname = 'sendpromocode'
     const log_description = `affliate with promocode dont exist`
     const logged_data = { userID ,  log_description , eventname , eventId , affliateID}
     const log_login =  log_affliate_model_failed(logged_data,res)
     console.log('this is logged in data')
     //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "affliate with promocode dont exist",
        error: "affliate with promocode dont exist",
      });
    }
    const data = {
        promocode , email , traineeId
    };

    let trainee = await send_affliate_link_to_trainer_model(data, res);
      //saving to the log
      const userID = traineeId 
      const affliateID = affliate._id 
      const eventId = 3
      const eventname = 'sendpromocode'
      const log_description = `promocode email to user`
      const logged_data = { userID ,  log_description , eventname , eventId , affliateID}
      const log_login =  log_affliate_model_success(logged_data,res)
      console.log('this is logged in data')
      //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "promocode email to user",
      
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res)
  }
};


module.exports = {
    send_affliate_link_to_trainer_controller
}