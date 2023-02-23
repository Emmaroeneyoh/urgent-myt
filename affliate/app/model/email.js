
const {
    USER_password_JWT,
    Emailtoken,
    Emailurl,
  } = require("../../../helper/utils");

const { handleError } = require("../../core/utils");
var { SendMailClient } = require("zeptomail");

const token = Emailtoken;
const url = Emailurl;
let clients = new SendMailClient({ url, token });





const send_affliate_link_to_trainer_model = async (data,res) => {
    try {
        const { promocode , email , traineeId } = data
    //start of nodemailer

clients
.sendMail({
  bounce_address: "system@dev.myt.page",
  from: {
    address: "noreply@myt.page",
    name: "myt.page",
  },
  to: [
    {
      email_address: {
        address: `${email}`,
      },
    },
   
  ],
  subject: "please use this to register as a atrainer",
  htmlbody: `${promocode}`,
})
.then((resp) => {
  return res.status(200).json({
    status_code: 200,
    status: true,
    message: "check your email box",
    data: []
  });
})
.catch((error) => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: "error occured while sending email",
  
    error: "error occured while sending email",
  });
});
//end of nodemailer
    return 'succcess'
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}


module.exports = {
    send_affliate_link_to_trainer_model
}