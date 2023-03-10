const joi = require("joi");
const { handleError } = require("./utils");

const trainerSignupValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    promocode: joi.number().optional(),
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

const trainerbankcreationValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    accountName: joi.string().required(),
    accountNickname: joi.string().required(),
    accountNumber: joi.string().required(),
    SB_code: joi.string().required(),
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

const trainerSwitchactivebankValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    bankId: joi.string().required(),
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

const singleaffliateValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    affliateId: joi.string().required(),
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

const singletrainerBankValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    bankId: joi.string().required(),
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

const alltrainerBankValidation = (req, res, next) => {
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
module.exports = {
  trainerSignupValidation,
  trainerbankcreationValidation,
  trainerSwitchactivebankValidation, singletrainerBankValidation , alltrainerBankValidation
};
