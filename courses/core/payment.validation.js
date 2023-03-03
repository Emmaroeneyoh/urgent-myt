const joi = require("joi");


const paymentsessionValidation = (req, res, next) => {
    const schema = joi.object({
        traineeId: joi.string().required(),
        trainerId: joi.string().required(),
        sessionId: joi.string().required(),
        number_of_attendee: joi.string().required(),
        total_amount: joi.number().required(),
        type_of_applicant: joi.string().required(),
        applicantId : joi.string().required(),
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
    paymentsessionValidation
}
