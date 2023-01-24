const { contactModel } = require("../../core/db/contactus.schema");


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


module.exports = {
    contactUsModel
}