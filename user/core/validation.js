const joi = require('joi')

const userSignupValidation = (req, res , next) => {
    const schema = joi.object({
        name:joi.string().required(),
        email:joi.string().required().email(),
        password:joi.string().required(),
        latitude:joi.number().required(),
        longitude:joi.number().required(),
       
      })
      const { error } = schema.validate(req.body)
    if (error) {
        let err = error.details[0].message;
        let errlen = err.split(' ')
        console.log('this is length ' , errlen.length)
        return res.status(400).json({
            status_code: 400,
            status: false,
            message: err,
            data: [],
            error: err,
          });
    }
    return next() 
}
const userLoginValidation = (req, res , next) => {
    const schema = joi.object({
        email:joi.string().required().email(),
        password:joi.string().required(),
       
      })
      const { error } = schema.validate(req.body)
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
    return next() 
}
const userforgotpasswordValidation = (req, res , next) => {
    const schema = joi.object({
        email:joi.string().required().email(),
       
      })
      const { error } = schema.validate(req.body)
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
    return next() 
}
const userResetpasswordValidation = (req, res , next) => {
    const schema = joi.object({
        password:joi.string().required(),
        id:joi.string().required(),
        token:joi.string().required(),
       
      })
      const { error } = schema.validate(req.body)
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
    return next() 
}

module.exports = {
    userSignupValidation ,
    userLoginValidation , userforgotpasswordValidation , userResetpasswordValidation
}