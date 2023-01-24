const { dependentModel } = require("../../core/db/dependent.schema");
const { createDependent } = require("../model/dependent.auth");
const { handleError } = require("../../core/utils");
const { userModel } = require("../../core/db/user.schema");


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
      const client = await dependentModel.findOne({ name: userName });
     
      if (client) {
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
  
      let trainee = await createDependent(data,res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "Dependent succesffuly registered",
        data: trainee,
      });
    } catch (error) {
        console.log(error);
        handleError(error.message)(res)
    }
};
  
module.exports = {
    createDependentController
}