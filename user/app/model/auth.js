const { userModel } = require("../../core/db/user.schema");
const { create_token, handleError } = require("../../core/utils");

const signupUserModel = async (data) => {
    try {
        const {name, userEmail , Harshpassword , country}  = data
    const form = await new userModel({
        name:name,
        password:  Harshpassword,
        email: userEmail,
        location: country
      });
    const userDetails = await form.save();
    const token = create_token(userDetails._id)
    const userData = {
        id: userDetails._id,
        name: userDetails.name,
        location : userDetails.location ,
        email: userDetails.email,
        token,
        role : userDetails.roles
        
    }
    return userData
    } catch (error) {
        handleError(error.message)(res)
    }
    
}
const loginUserModel = async (data) => {
 try {
    const {userEmail , password , }  = data
    const userDetails = await userModel.findOne({ email: userEmail});
  

    
    const token = create_token(userDetails._id)
    const userData = {
        id: userDetails._id,
        name: userDetails.name,
        location : userDetails.location ,
        email: userDetails.email,
        token,
        role : userDetails.roles
        
    }
    return userData
 } catch (error) {
  handleError(error.message)(res)
 }
    
}

module.exports = {
    signupUserModel,
    loginUserModel
}