const { userModel } = require("../../core/db/user.schema");
const { handleError } = require("../../core/utils");

const updateUserNameModel = async (data, res) => {
  try {
    const { userName, traineeId } = data;
    const userData = await userModel.findById({ _id:traineeId});
    const userDetails = await userModel.findByIdAndUpdate(
      traineeId,
      {
        $set: {
          name: userName,
        },
      },
      { new: true }
    );
     
      console.log('this is usee log details' , userDetails)
    return userDetails;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updateEmailModel = async (data, res) => {
  try {
    const { useremail, traineeId } = data;
    const userData = await userModel.findById({ _id:traineeId});
    const userDetails = await userModel.findByIdAndUpdate(
      traineeId,
      {
        $set: {
          email: useremail,
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

const updatePhoneModel = async (data, res) => {
  try {
    const { phoneNumber, traineeId } = data;
    const userData = await userModel.findById({ _id:traineeId});
    const userDetails = await userModel.findByIdAndUpdate(
      traineeId,
      {
        $set: {
          phoneNumber: phoneNumber,
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

const updatesocialModel = async (data, res) => {
  try {
    const { socialNumber, traineeId } = data;
    const userData = await userModel.findById({ _id:traineeId});
    const userDetails = await userModel.findByIdAndUpdate(
      traineeId,
      {
        $set: {
          socialNumber: socialNumber,
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
const updatelocationModel = async (data, res) => {
  try {
    const { location, traineeId } = data;
    const userDetails = await userModel.findByIdAndUpdate(
      traineeId,
      {
        $set: {
          location: location,
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
const updatePasswordModel = async (data, res) => {
  try {
    const { Harshpasswordnewpassword, traineeId } = data;
    const userData = await userModel.findById({ _id:traineeId});
    const userDetails = await userModel.findByIdAndUpdate(
      traineeId,
      {
        $set: {
          password: Harshpasswordnewpassword,
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
  updateUserNameModel,
  updateEmailModel,
  updatePhoneModel,
  updatesocialModel,
  updatelocationModel,
  updatePasswordModel,
};
