const { handleError } = require("../../core/utils");
const { userModel } = require("../../core/db/user.schema");
const { UserProfileModel } = require("../model/auth");


const userprofileController = async (req, res, next) => {
    const {  traineeId } = req.body;
   
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
        traineeId,
      };
  
    let trainee = await UserProfileModel(data, res);
             
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "user profile data retrieved",
        data: trainee,
      });
    } catch (error) {
    console.log(error);
        handleError(error.message)(res)
    }
};
  
module.exports = {
    userprofileController
}