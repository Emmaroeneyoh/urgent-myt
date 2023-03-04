
const { userModel } = require("../../../user/core/db/user.schema");
const { trainerModel } = require("../../core/db/trainer.schema");
const { trainersession } = require("../../core/db/trainer.session");
const { handleError } = require("../../core/utils");
const { single_trainer_model, all_trainer_model } = require("../model/retrieve.trainer");
const { single_trainer_session_model } = require("../model/session");



const singletrainerController = async (req, res, next) => {
    const { trainerId } = req.body;
    try {
   
      //checking if user exist already
      const client = await trainerModel.findById({_id: trainerId });
      if (!client) {
  
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "trainer account dont exist",
          data: [],
          error: "trainer account dont exist",
        });
      }
  
      
  
      const data = {
        trainerId
      };
  
      let trainee = await single_trainer_model(data, res);
    
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "trainer profile successfully retrieved",
        data: trainee,
        
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res)
    }
};
  

const alltrainerController = async (req, res, next) => {
    const { traineeId } = req.body;
    try {
   
      //checking if user exist already
      const client = await userModel.findById({_id: traineeId });
      if (!client) {
  
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "trainee account dont exist",
          data: [],
          error: "trainee account dont exist",
        });
      }
  
      
  
      const data = {
        traineeId
      };
  
      let trainee = await all_trainer_model(data, res);
    
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "trainer profile successfully retrieved",
        data: trainee,
        
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res)
    }
};
  

module.exports = {
    singletrainerController  , alltrainerController
}