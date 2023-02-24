const joi = require("joi");
const { handleError } = require("./utils");

const trainerSignupValidation = (req, res, next) => {
  const schema = joi.object({
    traineeId: joi.string().required(),
    promocode: joi.string().optional()
    
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
    trainerSignupValidation
}