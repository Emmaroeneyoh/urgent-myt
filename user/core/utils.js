const { USER_AUTH_JWT } = require("../../helper/utils");

const jwt = require('jsonwebtoken')
//create jwt token for users when the signup or login 
const age = 1 * 24 * 60 * 60;
const create_token = (user) => {
  return jwt.sign({ user }, USER_AUTH_JWT, {
    expiresIn: age,
  });
};

const handleError = (err) => res => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: err,
    data: [],
    error: err,
  });
}

module.exports = {
    create_token  , handleError
}