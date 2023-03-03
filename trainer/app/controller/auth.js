const { log_affliate_model_failed, log_affliate_model_success } = require("../../../log/app/model/affliate.log");
const { log_trainer_model_failed, log_trainer_model_success } = require("../../../log/app/model/trainer.log");
const { trainerModel } = require("../../core/db/trainer.schema");

const { handleError } = require("../../core/utils");
const { create_affliate_model, single_affliate_model, signup_Trainer_affliate_Model, signup_Trainer_Model } = require("../model/auth");



const createtrainer_affliateController = async (req, res, next) => {
  const { traineeId, promocode } = req.body;
  try {
 
    //checking if user exist already
    const client = await trainerModel.findOne({ traineeId : traineeId });
    if (client) {
       //saving to the log
       const userID = traineeId 
       const affliateID = client._id 
       const eventId = 1
       const eventname = 'registration'
       const log_description = ` a trainer account already exist with ths profile `
       const logged_data = { userID ,  log_description , eventname , eventId , affliateID}
       const log_login =  log_trainer_model_failed(logged_data,res)
       console.log('this is logged in data')
       //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "user already exist as a trainer already",
        data: [],
        error: "user already exist as a trainer already",
      });
    }

      //checking if promocode exist or not , use different models
      if (promocode) {
          
    const data = {
        traineeId, promocode
    };

    let trainee = await signup_Trainer_affliate_Model(data, res);
    //saving to the log
    const userID = traineeId 
    const trainerID = trainee._id
    const eventId = 1
    const eventname = 'registration'
    const log_description = ` a trainer account has successfully been registered `
    const logged_data = { userID , log_description , eventname , eventId , trainerID}
    const log_login =  log_trainer_model_success(logged_data,res)
    console.log('this is logged in data')
    //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer successfully created  ",
      data: trainee,
      
    });
          
      }

      else {
          console.log('promocode not available')
          const data = {
            traineeId
        };
    
        let trainee = await signup_Trainer_Model(data, res);
        //saving to the log
        const userID = traineeId 
        const trainerID = trainee._id
        const eventId = 1
        const eventname = 'registration'
        const log_description = ` a trainer account has successfully been registered `
        const logged_data = { userID , log_description , eventname , eventId , trainerID}
        const log_login =  log_trainer_model_success(logged_data,res)
        console.log('this is logged in data')
        //end of saving to the log
        return res.status(200).json({
          status_code: 200,
          status: true,
          message: "trainer successfully created  ",
          data: trainee,
          
        });
      }
    

  } catch (error) {
    console.log(error);
    handleError(error.message)(res)
  }
};


module.exports = {
    createtrainer_affliateController
}