const joi = require("joi");
const { handleError } = require("./utils");


const createdependentValidation = (req, res, next) => {
    const schema = joi.object({
      name: joi.string().required(),
      traineeId: joi.string().required(),
      age: joi.number().required(),
      socialNumber: joi.number().required(),
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
  
const editDependentValidation = (req, res, next) => {
  const schema = joi.object({
    dependentId: joi.string().required(),
    traineeId: joi.string().required(),
    name: joi.string().required(),
    age: joi.number().required(),
    social: joi.string().required(),
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
    createdependentValidation , editDependentValidation 
}