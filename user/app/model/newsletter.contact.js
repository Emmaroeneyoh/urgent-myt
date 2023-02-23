const { contactModel } = require("../../core/db/contactus.schema");
const { newsletterschema } = require("../../core/db/newsletter.schema");
const { notificationschema } = require("../../core/db/notify.schema");
const { handleError } = require("../../core/utils");



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

//notification model for both delete and create


const notificationModel = async (data,res) => {
    try {
        const { notification, traineeId } = data
        console.log('this is' , notification , traineeId)
    const notifications = await new notificationschema({
        notification ,
        traineeId
      });
    const userDetails = await notifications.save();
    return userDetails
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}
const DeletenotificationModel = async (data,res) => {
    try {
        const { notificationId } = data
    
    const userDetails = await notificationschema.findByIdAndDelete({_id : notificationId});
    return userDetails
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
} 
const GetnotificationModel  = async (data,res) => {
    try {
        const {  traineeId  } = data
    
    const userDetails = await notificationschema.find({traineeId});
    return userDetails
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}

module.exports = {
    contactUsModel , newsletterModel , notificationModel , DeletenotificationModel ,    GetnotificationModel
}