


const { userModel } = require("../../core/db/user.schema");
const { handleError } = require("../../core/utils");

const updateUserNameModel = async (data,res) => {
    try {
        const { userName , traineeId } = data
        const userDetails = await userModel.findByIdAndUpdate(traineeId, {
            $set: {
                name: userName,
                
     }  },  { new:true}) 
    return userDetails
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}


module.exports = {
    updateUserNameModel
}