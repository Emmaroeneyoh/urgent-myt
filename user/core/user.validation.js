const joi = require("joi");
const { handleError } = require("./utils");

const userSignupValidation = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().required(),
    country: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
    console.log("this is length ", errlen.length);
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const userLoginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const userforgotpasswordValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required().email(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const userResetpasswordValidation = (req, res, next) => {
  const schema = joi.object({
    password: joi.string().required(),
    token: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const contactUsValidation = (req, res, next) => {
  const schema = joi.object({
    lastname: joi.string().required(),
    firstname: joi.string().required(),
    message: joi.string().required(),
    phone: joi.number().required(),
    email: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const editTraineeNameValidation = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().required(),
    traineeId: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const editTraineeEmailValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required(),
    traineeId: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const editTraineePhoneValidation = (req, res, next) => {
  const schema = joi.object({
    phoneNumber: joi.string().required(),
    traineeId: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const editTraineeSocialValidation = (req, res, next) => {
  const schema = joi.object({
    socialNumber: joi.string().required(),
    traineeId: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const editTraineelocationValidation = (req, res, next) => {
  const schema = joi.object({
    location: joi.string().required(),
    traineeId: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const editTraineepasswordValidation = (req, res, next) => {
  const schema = joi.object({
    currentpassword: joi.string().required(),
    newpassword: joi.string().required(),
    traineeId: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const newsletteremailValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const TraineeNotificationValidation = (req, res, next) => {
  const schema = joi.object({
    notification: joi.string().required(),
    traineeId: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const GetNotificationValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};
const deleteNotificationValidation = (req, res, next) => {
  const schema = joi.object({
    notificationId: joi.string().required(),
    traineeId: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

module.exports = {
  userSignupValidation,
  userLoginValidation,
  userforgotpasswordValidation,
  userResetpasswordValidation,

  contactUsValidation,
  editTraineeNameValidation,
  newsletteremailValidation,
  editTraineeEmailValidation,
  editTraineePhoneValidation,
  editTraineeSocialValidation,
  editTraineelocationValidation,
  editTraineepasswordValidation,
  TraineeNotificationValidation,
  GetNotificationValidation, 
  deleteNotificationValidation
};
