const { userModel } = require("../../core/db/user.schema");
const bcrypt = require("bcrypt");
const { signupUserModel, loginUserModel } = require("../model/auth");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const {
  USER_password_JWT,
  Emailtoken,
  Emailurl,
} = require("../../../helper/utils");
var { SendMailClient } = require("zeptomail");
const { handleError } = require("../../core/utils");
const { log_user_model_failed, log_user_model_success } = require("../../../log/app/model/user.log");

const token = Emailtoken;
const url = Emailurl;
let clients = new SendMailClient({ url, token });

const signupUserController = async (req, res, next) => {
  const { name, email, password, country } = req.body;
  const userEmail = email.toLowerCase()
  try {
    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(password, salt);
    const client = await userModel.findOne({ email: userEmail });
    if (client) {
      //saving to the log
      const userID = 'null' 
      const eventId = 1
      const eventname = 'registration'
      const log_description = `user already exist in our system an cant be registered twice`
      const logged_data = { userID ,  log_description , eventname , eventId}
      const log_login =  log_user_model_failed(logged_data,res)
      console.log('this is logged in data')
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "email already exist",
        data: [],
        error: "email already exist",
      });
    }

       
    const data = {
      name,
      userEmail,
      Harshpassword,
      country,
    };

    let trainee = await signupUserModel(data, res);
    //saving to the log
    const userID = trainee.id
    const eventId = 1
    const eventname = 'registration'
    const log_description = `user has registered into our system`
    const logged_data = { userID , log_description , eventname , eventId}
    const log_login =  log_user_model_success(logged_data,res)
    console.log('this is logged in data')
    //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
      
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res)
  }
};

const loginUserController = async (req, res, next) => {
  const { email, password } = req.body;
  const userEmail = email.toLowerCase()
  try {
    const userDetails = await userModel.findOne({ email: userEmail });
    if (!userDetails) {
      //saving to the log
      const userID = 'null' 
      const eventId = 2 
      const eventname = 'login'
      const log_description = `user does not exist in our system`
      const logged_data = { userID , log_description , eventname , eventId}
      const log_login =  log_user_model_failed(logged_data,res)
      console.log('this is logged in data')
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "user dont exist on our application",
        data: [],
        error: "user dont exist on our application",
      });
    }

    

    const checkPassword = await bcrypt.compare(password, userDetails.password);
    if (!checkPassword) {
      //saving to the log
      const userID = userDetails._id 
      const eventId = 2
      const eventname = 'login'
      const log_description = `password is wrong for this account`
      const logged_data = { userID , log_description , eventname , eventId}
      const log_login =  log_user_model_failed(logged_data,res)
      console.log('this is logged in data')
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect password",
        data: [],
        error: "incorrect password",
      });
    }
    const data = {
      userEmail,
      password,
    };

    let trainee = await loginUserModel(data, res);
     //saving to the log
     const userID = userDetails._id 
     const eventId = 2
     const eventname = 'login'
     const log_description = `user has logged into our systems`
     const logged_data = { userID , log_description , eventname , eventId}
     const log_login =  log_user_model_success(logged_data,res)
     console.log('this is logged in data')
     //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
      error: {},
    });
  } catch (error) {
    console.log(error);
  }
};

const sendUserNewPasswordLink = async (req, res) => {
  const { email } = req.body;
  try {
    const client = await userModel.findOne({ email: email });
    if (!client) {
         //saving to the log
         const userID = 'null' 
         const eventId = 3 
         const eventname = 'emailPassword'
         const log_description = `user does not exist in our system`
         const logged_data = { userID , log_description , eventname , eventId}
         const log_login =  log_user_model_failed(logged_data,res)
         console.log('this is logged in data')
         //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect email",
        data: [],
        error: "incorrect email",
      });
    }
    //function to generate token
    const secret = USER_password_JWT;
    const payload = {
      email: client.email,
      id: client._id,
    };
    const token = jwt.sign(payload, secret, { expiresIn: "50m" });

    const link = `https://dev-myt-page.netlify.app/reset_password/?token=${token}`;

    //start of nodemailer

    clients
      .sendMail({
        bounce_address: "system@dev.myt.page",
        from: {
          address: "noreply@myt.page",
          name: "myt.page",
        },
        to: [
          {
            email_address: {
              address: `${email}`,
            },
          },
          // {
          //   email_address: {
          //     address: `atissmits@gmail.com`,
          //   },
          // },
          // {
          //   email_address: {
          //     address: `atissmits@outlook.com`,
          //   },
          // },
        ],
        subject: "Reset password ",
        htmlbody: `${link}`,
      })
      .then((resp) => {
              //saving to the log
      const userID = client._id
      const eventId = 3 
      const eventname = 'emailPassword'
      const log_description = `security linked successfully delivered to user email`
      const logged_data = { userID , log_description , eventname , eventId}
      const log_login =  log_user_model_success(logged_data,res)
      console.log('this is logged in data')
      //end of saving to the log
        return res.status(200).json({
          status_code: 200,
          status: true,
          message: "check your email box",
          data: []
        });
      })
      .catch((error) => {
           //saving to the log
      const userID = client._id
      const eventId = 3 
      const eventname = 'emailPassword'
      const log_description = `email had issues well delivering new password`
      const logged_data = { userID , log_description , eventname , eventId}
      const log_login =  log_user_model_failed(logged_data,res)
      console.log('this is logged in data')
      //end of saving to the log
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "error occured while sending email",
        
          error: "error occured while sending email",
        });
      });
    //end of nodemailer
    console.log("this is token", token);
  } catch (error) {
    console.log(error);
  }
};

const resetUserPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const verifiedToken = jwt.verify(token, USER_password_JWT);
    // console.log(verifiedToken.id)
    const id = verifiedToken.id;

    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(password, salt);
    const updateclient = await userModel.findByIdAndUpdate(id, {
      $set: {
        password: Harshpassword,
      },
    });
    if (!updateclient) {
            //saving to the log
            const userID = id 
            const eventId = 4 
            const eventname = 'resetPassword'
            const log_description = `password reset failed`
            const logged_data = { userID , log_description , eventname , eventId}
            const log_login =  log_user_model_failed(logged_data,res)
            console.log('this is logged in data')
            //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "cant update password",
        data: [],
        error: "cant update password",
      });
    }
          //saving to the log
          const userID = id 
          const eventId = 4 
          const eventname = 'resetPassword'
          const log_description = `password updated successfully`
          const logged_data = { userID , log_description , eventname , eventId}
          const log_login =  log_user_model_success(logged_data,res)
          console.log('this is logged in data')
          //end of saving to the log
    return res.status(200).json({
      
      status_code: 200,
      status: true,
      message: "user password updated",
      data: [],
      error: {},
    });
  } catch (error) {
    console.log(error);
          //saving to the log
          const userID = 'null' 
          const eventId = 5 
          const eventname = 'invalidtoken'
          const log_description = `user token is invalid`
          const logged_data = { userID , log_description , eventname , eventId}
          const log_login =  log_user_model_failed(logged_data,res)
          console.log('this is logged in data')
          //end of saving to the log
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "token has expired",
      data: [],
      error: "token has expired",
    });
  }
};


module.exports = {
  signupUserController,
  loginUserController,
  sendUserNewPasswordLink,
  resetUserPassword,
};
