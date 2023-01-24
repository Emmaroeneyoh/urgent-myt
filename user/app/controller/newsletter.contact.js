const { handleError } = require("../../core/utils");
const { contactUsModel } = require("../model/newsletter.contact");




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
  

module.exports = {
    contactUsController
}