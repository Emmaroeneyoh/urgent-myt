const joi = require("joi");
const { handleError } = require("./utils");

const alltraineeappointmentValidation = (req, res, next) => {
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

const alltraineefilteredappointmentValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    category: joi.string().required(),
    city: joi.string().required(),
    progress: joi.number().required(),
    duration: joi.number().required(),
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
const singletraineeappointmentValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    appointmentId: joi.string().required(),
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
const singletrainerValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
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
const alltrainertraineeValidation = (req, res, next) => {
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

module.exports = {
  alltraineeappointmentValidation,
  alltraineefilteredappointmentValidation,
  singletraineeappointmentValidation,singletrainerValidation , alltrainertraineeValidation
};
