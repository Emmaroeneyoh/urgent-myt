const base_url = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const USER_AUTH_JWT = process.env.JWT;
const USER_password_JWT = process.env.userpasswordjwt;
const Emailtoken = process.env.emailtoken;
const Emailurl = process.env.emailurl;

module.exports = {
  base_url,
  PORT,
  USER_AUTH_JWT,
    USER_password_JWT,
    Emailtoken,
  Emailurl
};
