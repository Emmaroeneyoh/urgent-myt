const jwt = require('jsonwebtoken')
const { USER_AUTH_JWT } = require('../../helper/utils')

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

module.exports = {
    user_check_token
}