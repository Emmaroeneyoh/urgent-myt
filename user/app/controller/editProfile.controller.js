const { handleError } = require("../../core/utils");
const { userModel } = require("../../core/db/user.schema");
const bcrypt = require('bcrypt')
const {
  updateUserNameModel,
  updateEmailModel,
  updatePhoneModel,
  updatesocialModel,
  updatelocationModel,
  updatePasswordModel,
} = require("../model/editProfile.model");
const { log_user_model_success, log_user_model_failed } = require("../../../log/app/model/user.log");

const updateUserNameController = async (req, res, next) => {
  const { name, traineeId } = req.body;

  const userName = name.toLowerCase();
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
      userName,
    };

    let trainee = await updateUserNameModel(data, res);
      //saving to the log
      const userID = trainee._id
      const eventId = 8 
      const eventname = 'editprofile'
      const log_description = `user name updated`
      const logged_data = { userID , log_description , eventname , eventId}
      const log_login = log_user_model_success(logged_data,res)
      console.log('this is logged in data')
      //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainee name updated successfully",
      data: trainee,
    });
  } catch (error) {
    
    console.log(error);
    handleError(error.message)(res);
  }
};

const updateEmailController = async (req, res, next) => {
  const { email, traineeId } = req.body;

  const useremail = email.toLowerCase();
  try {
    const user = await userModel.findOne({ _id: traineeId });
    //check if other email exist already
    const checkemail = await userModel.findOne({ email: useremail });

    if (checkemail) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "email already exist",

        error: "email already exist",
      });
    }
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
      useremail,
    };

    let trainee = await updateEmailModel(data, res);
        //saving to the log
        const userID = trainee._id 
        const eventId = 8 
        const eventname = 'editprofile'
        const log_description = `user email updated`
        const logged_data = { userID , log_description , eventname , eventId}
        const log_login = log_user_model_success(logged_data,res)
        console.log('this is logged in data')
        //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainee email updated successfully",
      data: trainee,
    });
  } catch (error) {
       
    console.log(error);
    handleError(error.message)(res);
  }
};

const updatePhoneController = async (req, res, next) => {
  const { phoneNumber, traineeId } = req.body;

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
      phoneNumber,
    };

    let trainee = await updatePhoneModel(data, res);
        //saving to the log
        const userID = trainee._id 
        const eventId = 8 
        const eventname = 'editprofile'
        const log_description = `user phone number updated`
        const logged_data = { userID , log_description , eventname , eventId}
        const log_login = log_user_model_success(logged_data,res)
        console.log('this is logged in data')
        //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainee phone number updated successfully",
      data: trainee,
    });
  } catch (error) {
       
    console.log(error);
    handleError(error.message)(res);
  }
};
const updatesocialController = async (req, res, next) => {
  const { socialNumber, traineeId } = req.body;

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
      socialNumber,
    };

    let trainee = await updatesocialModel(data, res);
        //saving to the log
        const userID = trainee._id 
        const eventId = 8 
        const eventname = 'editprofile'
        const log_description = `user social number updated`
        const logged_data = { userID , log_description , eventname , eventId}
        const log_login = log_user_model_success(logged_data,res)
        console.log('this is logged in data')
        //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainee social number updated successfully",
      data: trainee,
    });
  } catch (error) {
       
    console.log(error);
    handleError(error.message)(res);
  }
};
const updatelocationController = async (req, res, next) => {
  const { location, traineeId } = req.body;

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
      location
    };

    let trainee = await updatelocationModel(data, res);
        //saving to the log
        const userID = trainee._id 
        const eventId = 8 
        const eventname = 'editprofile'
        const log_description = `user location updated`
        const logged_data = { userID , log_description , eventname , eventId}
        const log_login = log_user_model_success(logged_data,res)
        console.log('this is logged in data')
        //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainee location updated successfully",
      data: trainee,
    });
  } catch (error) {
       
    console.log(error);
    handleError(error.message)(res);
  }
};
const updatepasswordController = async (req, res, next) => {
  const { currentpassword, newpassword , traineeId } = req.body;

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
    //bycypting the current password and checking if it matches with the one on the database
    const salt = await bcrypt.genSalt();
    const Harshpasswordcurrentpassword = await bcrypt.compare(currentpassword, user.password);
    const Harshpasswordnewpassword = await bcrypt.hash(newpassword, salt);
    if (!Harshpasswordcurrentpassword) {
          //saving to the log
     const userID = user._id
     const eventId = 8 
     const eventname = 'editprofile'
     const log_description = `user password incorrect, input your current old password.`
     const logged_data = { userID , log_description , eventname , eventId}
     const log_login = log_user_model_failed(logged_data,res)
     console.log('this is logged in data')
     //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "input your correct current password",

        error: "input your correct current password",
      });
    }

    

    const data = {
      traineeId,
      Harshpasswordnewpassword
    };

    let trainee = await updatePasswordModel(data, res);
        //saving to the log
        const userID = trainee._id 
        const eventId = 8 
        const eventname = 'editprofile'
        const log_description = `user password updated`
        const logged_data = { userID , log_description , eventname , eventId}
        const log_login = log_user_model_success(logged_data,res)
        console.log('this is logged in data')
        //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainee password updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  updateUserNameController,
  updateEmailController,
  updatePhoneController , updatesocialController , updatelocationController , updatepasswordController
};
