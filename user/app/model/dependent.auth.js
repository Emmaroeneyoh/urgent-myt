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
const singleDependent = async (data,res) => {
    try {
        const { dependentId } = data
        const userData = await dependentModel.findById({ _id:dependentId});
    
        
    return userData
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}
const allDependent = async (data,res) => {
    try {
        const {  traineeId } = data
        const userData = await dependentModel.find({ traineeId});
     
        
    return userData
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}
const deleteDependent = async (data,res) => {
    try {
        const { dependentId , traineeId} = data
        const userData = await dependentModel.findByIdAndDelete({ _id: dependentId });
        const updateTrainee = await userModel.findByIdAndUpdate({_id:traineeId}, {
            $pull : {
                dependent:{
                    dependentId : dependentId
                }
            }
        }) 
    return userData
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}


module.exports = {
    createDependent , singleDependent , allDependent , deleteDependent
}