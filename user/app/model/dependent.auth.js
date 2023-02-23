const { dependentModel } = require("../../core/db/dependent.schema");
const { userModel } = require("../../core/db/user.schema");
const { handleError } = require("../../core/utils");

const createDependent = async (data,res) => {
    try {
        const { userName, age, socialNumber, traineeId } = data
        const userData = await userModel.findById({ _id:traineeId});
    const dependent = await new dependentModel({
        name : userName,
        age,
        socialNumber,
        traineeId
      });
    const userDetails = await dependent.save();
    const updateTrainee = await userModel.findByIdAndUpdate({_id:traineeId}, {
        $push : {
            dependent:{
                dependentId : userDetails._id
              
            }
        }
    }) 
        
    return userDetails
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}


module.exports = {
    createDependent
}