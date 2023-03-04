const { log_affliate_model_failed, log_affliate_model_success } = require("../../../log/app/model/affliate.log");
const { affliate_model } = require("../../core/db/affliate.schema");

const { handleError } = require("../../core/utils");
const { create_affliate_model, single_affliate_model } = require("../model/auth");



const createAffliateController = async (req, res, next) => {
  const { traineeId , accountName , accountNumber ,  SB_code ,  accountNickname } = req.body;
  try {
 
    //checking if user exist already
    const client = await affliate_model.findOne({ traineeId : traineeId });
    if (client) {
       //saving to the log
       const userID = traineeId 
       const affliateID = client._id 
       const eventId = 1
       const eventname = 'registration'
       const log_description = ` an affliate account already exist with ths profile `
       const logged_data = { userID ,  log_description , eventname , eventId , affliateID}
       const log_login =  log_affliate_model_failed(logged_data,res)
       console.log('this is logged in data')
       //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "user already exist as an affliate already",
        data: [],
        error: "user already exist as an affliate already",
      });
    }

    

    const data = {
        traineeId , accountName , accountNumber ,  SB_code ,  accountNickname
    };

    let trainee = await create_affliate_model(data, res);
    //saving to the log
    const userID = traineeId 
    const affliateID = trainee._id
    const eventId = 1
    const eventname = 'registration'
    const log_description = ` an affliate account has successfully been registered `
    const logged_data = { userID , log_description , eventname , eventId , affliateID}
    const log_login =  log_affliate_model_success(logged_data,res)
    console.log('this is logged in data')
    //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "affliate successfully created with an active bank account ",
      data: trainee,
      
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res)
  }
};


const singleAffliateController = async (req, res, next) => {
  const { traineeId } = req.body;
  try {
 
    //checking if user exist already
    const client = await affliate_model.findOne({traineeId});
    if (!client) {

      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "affliate account dont exist",
        data: [],
        error: "affliate account dont exist",
      });
    }

    

    const data = {
      traineeId
    };

    let trainee = await single_affliate_model(data, res);
  
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "affliate profile successfully retrieved",
      data: trainee,
      
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res)
  }
};


module.exports = {
    createAffliateController , singleAffliateController
}