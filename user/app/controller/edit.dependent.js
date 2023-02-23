const { handleError } = require("../../core/utils");
const { dependentModel } = require("../../core/db/dependent.schema");
const { updatedependentModel } = require("../model/edit.dependent");
const { log_user_model_success, log_user_model_failed } = require("../../../log/app/model/user.log");

const updateDependentNameController = async (req, res, next) => {
    const {name, dependentId  , age , social , traineeId} = req.body;
  
    const userName = name.toLowerCase();
    try {
      const user = await dependentModel.findOne({ _id: dependentId });
      if (!user) {
              //saving to the log
              const userID = traineeId
              const eventId = 7 
              const eventname = 'editdependent'
              const log_description = `dependent dont exist on our system`
              const logged_data = { userID ,  log_description , eventname , eventId}
              const log_login =  log_user_model_failed(logged_data,res)
              console.log('this is logged in data')
              //end of saving to the log
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "dependent dont exist",
  
          error: "dependent dont exist",
        });
      }
  
      const data = {
        dependentId,
       name, age , social
      };
  
      let trainee = await updatedependentModel(data, res);
            //saving to the log
            const userID = user._id
            const eventId = 7 
            const eventname = 'editdependent'
            const log_description = `dependent  successfully updated`
            const logged_data = { userID ,  log_description , eventname , eventId}
            const log_login =  log_user_model_success(logged_data,res)
            console.log('this is logged in data')
            //end of saving to the log
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "dependent updated successfully",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };

  
module.exports = {
    updateDependentNameController 
  }