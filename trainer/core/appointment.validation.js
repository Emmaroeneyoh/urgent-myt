const joi = require("joi");


const trainermarkattendanceValidation = (req, res, next) => {
    const schema = joi.object({
      traineeId: joi.string().required(),
      trainerId: joi.string().optional(),
      appointmentId: joi.string().optional(),
      moduleId: joi.string().optional(),
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
    trainermarkattendanceValidation
}