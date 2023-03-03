const joi = require("joi");
const { handleError } = require("./utils");

const trainerexperienceValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    experience_level: joi.string().required(),
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
const trainerbioValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    bio: joi.string().required(),
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

const trainerRoleValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
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

const trainerbackgroundValidation = (req, res, next) => {
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

const trainerskillValidation = (req, res, next) => {
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

const trainerwork_experienceValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    work_experienceId: joi.string().required(),
    title: joi.string().required(),
    company: joi.string().required(),
    recent_work: joi.boolean().required(),
    start_date: joi.string().required(),
    end_date: joi.string().required(),
    job_skills: joi.string().required(),
    role_accomplishment: joi.string().required(),
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

const trainereducation_degreeValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    educational_backgroundId: joi.string().required(),
    place_of_qaulification: joi.string().required(),
    in_view: joi.boolean().required(),
    graduation_year: joi.string().required(),
    describe_learning: joi.string().required(),
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
  trainerexperienceValidation,
  trainerbioValidation,
  trainerRoleValidation,
  trainerbackgroundValidation,
  trainerwork_experienceValidation,
  trainereducation_degreeValidation,trainerskillValidation
};
