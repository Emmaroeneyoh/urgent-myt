const joi = require("joi");

const trainercreatesessionValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    category_name: joi.string().required(),
    default_category: joi.boolean().required(),
    sub_category_name: joi.string().required(),
    default_sub_category: joi.boolean().required(),
    variant_name: joi.string().required(),
    default_variant: joi.boolean().required(),
    slot: joi.number().required(),
    min: joi.number().required(),
    max: joi.number().required(),
    session_type: joi.object().required(),
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

const trainercreatesession1Validation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    sessionId: joi.string().required(),
    session_image: joi.string().required(),
    session_description: joi.string().required(),
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

const trainercreatesession2Validation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    sessionId: joi.string().required(),
    subscription_type: joi.object().required(),
    mark_attendance: joi.string().required(),
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
const trainercreatesession3Validation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    sessionId: joi.string().required(),
    curriculum: joi.array().required(),
    curriculum_duration: joi.number().required(),
    custom_time: joi.boolean().required(),
    curriculum_type: joi.string().required(),
    sessionId: joi.string().required(),
   
    start_time: joi.string().required(),
    end_time: joi.string().required(),
    start_date: joi.string().required(),
    end_date: joi.string().required(),
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

const trainercreatesession4Validation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    sessionId: joi.string().required(),
    curriculum_type: joi.string().required(),
    curriculum: joi.array().required(),
    curriculum_duration: joi.number().required(),
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

const trainercreatesession5Validation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    trainerId: joi.string().required(),
    sessionId: joi.string().required(),
    pricing: joi.array().required(),
    pricing_method: joi.string().required(),
    course_bank: joi.string().required(),
    who_pays: joi.string().required(),
    cancellation_fee: joi.string().required(),
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

const filteredtrainersessionValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    sub_category: joi.string().required(),
    age: joi.array().required(),
    category: joi.string().required(),
    variant: joi.string().required(),
    country: joi.string().required(),
    city: joi.string().required(),
    session_type: joi.boolean().required(),
    min_price: joi.number().required(),
    max_price: joi.number().required(),
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
const singletrainersessionValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    sessionId: joi.string().required(),
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
const trainersessionsValidation = (req, res, next) => {
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
  trainercreatesessionValidation,
  trainercreatesession1Validation,
  trainercreatesession2Validation,
  trainercreatesession4Validation,
  trainercreatesession5Validation,
  trainercreatesession3Validation,
  filteredtrainersessionValidation,singletrainersessionValidation , trainersessionsValidation
};
