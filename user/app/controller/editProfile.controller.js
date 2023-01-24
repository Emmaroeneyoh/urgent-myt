const { handleError } = require("../../core/utils");
const { userModel } = require("../../core/db/user.schema");
const { updateUserNameModel } = require("../model/editProfile.model");


const updateUserNameController = async (req, res, next) => {
    const { name , traineeId} = req.body;
   
    const userName = name.toLowerCase()
  try {
    const user = await userModel.findOne({ _id:traineeId });
    if (!user) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainee dont exist",
    
        error: "trainee dont exist",
      });
    }
      
  
      const data = {
        traineeId,
        userName,
     
      };
  
      let trainee = await updateUserNameModel(data,res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "trainee name updated successfully",
        data: trainee,
      });
    } catch (error) {
        console.log(error);
        handleError(error.message)(res)
    }
};


module.exports = {
  updateUserNameController
}