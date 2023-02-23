const {dependentModel } = require("../../core/db/dependent.schema");
const { handleError } = require("../../core/utils");


const updatedependentModel = async (data, res) => {
    try {
      const { name, dependentId, age, social } = data;
      const userDetails = await dependentModel.findByIdAndUpdate(
        dependentId,
        {
          $set: {
            name: name,
            age: age,
            socialNumber : social,
          },
        },
        { new: true }
      );
    
      return userDetails;
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  


  
module.exports = {
    updatedependentModel 
}