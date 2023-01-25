const { newsletterschema } = require("../../core/db/newsletter.schema");
const { handleError } = require("../../core/utils");
const { contactUsModel, newsletterModel } = require("../model/newsletter.contact");




const contactUsController = async (req, res, next) => {
    const { firstname , lastname , phone , email , message } = req.body;
  try {
      const data = {
        firstname,
        lastname,
        phone,
          email,
        message
      };
  
      let contact = await contactUsModel(data,res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "Message sent successfully",
        data: contact,
      });
    } catch (error) {
        console.log(error);
        handleError(error.message)(res)
    }
};


const newsletterController = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = email.toLowerCase()
  try {
    const client = await newsletterschema.findOne({ email: userEmail });
    if (client) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "email already subscribed",
       
        error: "email already subscribed",
      });
    }
      const data = {
        userEmail
      };
  
      let contact = await newsletterModel(data,res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "Message sent successfully",
        data: contact,
      });
    } catch (error) {
        console.log(error);
        handleError(error.message)(res)
    }
};
  

module.exports = {
    contactUsController , newsletterController
}