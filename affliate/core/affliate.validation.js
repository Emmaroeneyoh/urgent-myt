const joi = require("joi");
const { handleError } = require("./utils");

const affliateSignupValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    accountName: joi.string().required(),
    accountNickname: joi.string().required(),
    accountNumber: joi.string().required(),
    SB_code: joi.string().required(),
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
const affliatebankcreationValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    accountName: joi.string().required(),
    accountNickname: joi.string().required(),
    accountNumber: joi.string().required(),
    SB_code: joi.string().required(),
    affliateId: joi.string().required()
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

const affliateSendpromocodeValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    email: joi.string().required(),
    promocode: joi.number().required(),
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

const affliateSwitchactivebankValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    affliateId: joi.string().required(),
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


const singleaffliateBankValidation = (req, res, next) => {
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


const allaffliateBankValidation = (req, res, next) => {
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

module.exports = {
  affliateSignupValidation,
  affliateSendpromocodeValidation,
  affliateSwitchactivebankValidation,affliatebankcreationValidation,
  singleaffliateValidation , singleaffliateBankValidation , allaffliateBankValidation
};
