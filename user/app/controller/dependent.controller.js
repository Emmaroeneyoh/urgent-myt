const { dependentModel } = require("../../core/db/dependent.schema");
const { createDependent, singleDependent, allDependent, deleteDependent } = require("../model/dependent.auth");
const { handleError } = require("../../core/utils");
const { userModel } = require("../../core/db/user.schema");
const { log_user_model_failed, log_user_model_success } = require("../../../log/app/model/user.log");


const createDependentController = async (req, res, next) => {
    const { name, age, socialNumber, traineeId } = req.body;
   
    const userName = name.toLowerCase()
  try {
    const user = await userModel.findOne({ _id: traineeId });
    if (!user) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainee dont exist",
    
        error: "trainee dont exist",
      });
    }
      const client = await dependentModel.findOne({ name: userName , traineeId: traineeId });
     
    if (client) {
       //saving to the log
      const userID = user._id
      const eventId = 6 
      const eventname = 'createdependent'
      const log_description = `dependent name already exist`
      const logged_data = { userID ,  log_description , eventname , eventId}
      const log_login =  log_user_model_failed(logged_data,res)
      console.log('this is logged in data')
      //end of saving to the log
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "name already exist",
      
          error: "name already exist",
        });
      }
  
      const data = {
        traineeId,
        userName,
        age,
        socialNumber,
      };
  
    let trainee = await createDependent(data, res);
             //saving to the log
             const userID = user._id
             const eventId = 6 
             const eventname = 'createdependent'
             const log_description = `dependent  successfully created`
             const logged_data = { userID ,  log_description , eventname , eventId}
             const log_login =  log_user_model_success(logged_data,res)
             console.log('this is logged in data')
             //end of saving to the log
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "Dependent succesffuly registered",
        data: trainee,
      });
    } catch (error) {
    console.log(error);
            //saving to the log
            const userID = user._id
            const eventId = 6 
            const eventname = 'createdependent'
            const log_description = `failed to create dependent`
            const logged_data = { userID ,  log_description , eventname , eventId}
            const log_login =  log_user_model_failed(logged_data,res)
            console.log('this is logged in data')
            //end of saving to the log
        handleError(error.message)(res)
    }
};
  
const singleDependentController = async (req, res, next) => {
    const { dependentId , traineeId} = req.body;
   
  try {
    const user = await userModel.findOne({ _id: traineeId });
    if (!user) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainee dont exist",
    
        error: "trainee dont exist",
      });
    }
      const client = await dependentModel.findById({ _id : dependentId });
     
    if (!client) {
      
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "dependent dont exist",
      
          error: "dependent dont exist",
        });
      }
  
      const data = {
       dependentId
      };
  
    let trainee = await singleDependent(data, res);
           
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "Dependent succesffuly retrieved",
        data: trainee,
      });
    } catch (error) {
    console.log(error);
        
        handleError(error.message)(res)
    }
};
  
const allDependentController = async (req, res, next) => {
    const { traineeId} = req.body;
   
  try {
    const user = await userModel.findOne({ _id: traineeId });
    if (!user) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainee dont exist",
    
        error: "trainee dont exist",
      });
    }
     
      const data = {
       traineeId
      };
  
    let trainee = await allDependent(data, res);
           
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "Dependent succesffuly retrieved",
        data: trainee,
      });
    } catch (error) {
    console.log(error);
        
        handleError(error.message)(res)
    }
};
  
const deleteDependentController = async (req, res, next) => {
    const { dependentId , traineeId} = req.body;
   
  try {
    const user = await userModel.findOne({ _id: traineeId });
    if (!user) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainee dont exist",
    
        error: "trainee dont exist",
      });
    }
      const client = await dependentModel.findById({ _id : dependentId });
     
    if (!client) {
      
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "dependent dont exist",
      
          error: "dependent dont exist",
        });
      }
  
      const data = {
       dependentId,traineeId
      };
  
    let trainee = await  deleteDependent(data, res);
           
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "Dependent succesffuly retrieved",
        data: trainee,
      });
    } catch (error) {
    console.log(error);
        
        handleError(error.message)(res)
    }
};
  
module.exports = {
    createDependentController , singleDependentController , deleteDependentController , allDependentController
}