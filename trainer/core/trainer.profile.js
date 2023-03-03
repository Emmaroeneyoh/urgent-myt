const joi = require("joi");
const { handleError } = require("./utils");

const trainerprofile1Validation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    experience_level: joi.string().required(),
    bio: joi.string().required(),
    role: joi.string().required(),
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

const trainerprofile2Validation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    work_experience: joi.array().required(),
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

const trainerprofile3Validation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    education_degree: joi.array().required(),
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




const trainerprofile4Validation = (req, res, next) => {
    const schema = joi.object({
      traineeId: joi.string().required(),
      trainerId: joi.string().required(),
      skills: joi.array().required(),
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
const trainerprofile5Validation = (req, res, next) => {
    const schema = joi.object({
      traineeId: joi.string().required(),
      trainerId: joi.string().required(),
      educational_background: joi.string().required(),
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

const singletrainerprofileValidation = (req, res, next) => {
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
  trainerprofile1Validation,
  trainerprofile2Validation,
    trainerprofile3Validation,
    trainerprofile5Validation,
    trainerprofile4Validation, singletrainerprofileValidation
};

