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

const token = Emailtoken;
const url = Emailurl;
let clients = new SendMailClient({ url, token });

const signupUserController = async (req, res, next) => {
  const { name, email, password, country } = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(password, salt);
    const client = await userModel.findOne({ email: email });
    if (client) {
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
      email,
      Harshpassword,
      country,
    };

    let trainee = await signupUserModel(data);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
      error: {},
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUserController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userDetails = await userModel.findOne({ email: email });
    if (!userDetails) {
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
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect password",
        data: [],
        error: "incorrect password",
      });
    }
    const data = {
      email,
      password,
    };

    let trainee = await loginUserModel(data);
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

    const link = `http://localhost:3000/reset_password/?token=${token}`;

    //start of nodemailer

    clients
      .sendMail({
        bounce_address: "system@dev.myt.page",
        from: {
          address: "noreply@myt.page",
          name: "noreply",
        },
        to: [
          {
            email_address: {
              address: `${email}`,
            },
          },
        ],
        subject: "Reset password ",
        htmlbody: `${link}`,
      })
      .then((resp) => {
        return res.status(200).json({
          status_code: 200,
          status: true,
          message: "check your email box",
          data: []
        });
      })
      .catch((error) => {
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
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "cant update password",
        data: [],
        error: "cant update password",
      });
    }
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "user password updated",
      data: [],
      error: {},
    });
  } catch (error) {
    console.log(error);
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
