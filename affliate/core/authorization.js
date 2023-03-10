const jwt = require('jsonwebtoken')
const { USER_AUTH_JWT } = require('../../helper/utils')
const { affliate_model } = require('./db/affliate.schema')
const { handleError } = require('./utils')

const user_check_token = (req, res, next) => {
  let userID = req.body.traineeId
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1] // gotten the token, now we will decode it

          const decoded = jwt.verify(token, USER_AUTH_JWT)
        const role = decoded.user
        if (userID != role) {
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "Auhtorization does not validate user ",
        
            error: "Auhtorization does not validate user ",
          });
         }
                 console.log(role)

       next()
      } catch (error) {
          return res.status(400).json({
            status_code: 400,
            status: false,
            message: "Auhtorization token Invalid",
        
            error: "Auhtorization token Invalid",
          });
      }
    }
    if (!token) {
        return res.status(400).json({
            status_code: 400,
            status: false,
            message: "request unAuthorized",
        
            error: "request unAuthorized",
          });
    }
}
const check_user_affliate  = async (req, res, next) => {
  let userID = req.body.traineeId
    try {
      const checkaffliate = await affliate_model.findOne({ traineeId: userID })
      if (checkaffliate) {
       console.log('user is an affliate , success')
        next()
      } else {
        console.log('user is not an affliate')
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "user does not have an affliate account",
      
          error: "user does not have an affliate account",
        });
      }
    } catch (error) {
      
      console.log(error)
      handleError(error.message)(res)
    }
}


module.exports = {
    user_check_token , check_user_affliate
}