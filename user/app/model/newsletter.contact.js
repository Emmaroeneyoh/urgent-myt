const { contactModel } = require("../../core/db/contactus.schema");
const { newsletterschema } = require("../../core/db/newsletter.schema");


const contactUsModel = async (data,res) => {
    try {
        const { firstname, phone, lastname, email , message } = data
    const contact = await new contactModel({
        firstname ,
        lastname ,
        phone ,
        email,
        message
        
      });
    const userDetails = await contact.save();
    return userDetails
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}



const newsletterModel = async (data,res) => {
    try {
        const {  userEmail  } = data
    const contact = await new newsletterschema({
        email : userEmail
      });
    const userDetails = await contact.save();
    return userDetails
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}


module.exports = {
    contactUsModel , newsletterModel
}