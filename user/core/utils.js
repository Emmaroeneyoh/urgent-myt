const { USER_AUTH_JWT } = require("../../helper/utils");

const jwt = require('jsonwebtoken')
//create jwt token for users when the signup or login 
const age = 1 * 24 * 60 * 60;
const create_token = (user) => {
  return jwt.sign({ user }, USER_AUTH_JWT, {
    expiresIn: age,
  });
};

module.exports = {
    create_token
}