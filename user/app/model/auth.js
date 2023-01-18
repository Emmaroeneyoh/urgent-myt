const { userModel } = require("../../core/db/user.schema");
const { create_token } = require("../../core/utils");

const signupUserModel = async (data) => {
    const {name, email , Harshpassword , latitude , longitude}  = data
    const form = await new userModel({
        name:name,
        password:  Harshpassword,
        email: email,
        location: {
            longitude: longitude,
            latitude : latitude
        }
      });
    const userDetails = await form.save();
    const token = create_token(userDetails._id)
    const userData = {
        id: userDetails._id,
        name: userDetails.name,
        latitude: userDetails.location.latitude,
        longitude: userDetails.location.longitude,
        email: userDetails.email,
        token,
        role : userDetails.roles
        
    }
    return userData
    
}
const loginUserModel =  (data) => async  (res) =>{
    const {email , password , }  = data
   try {
    const userDetails = await userModel.findOne({ email: email });
  

    
    const token = create_token(userDetails._id)
    const userData = {
        id: userDetails._id,
        name: userDetails.name,
        latitude: userDetails.location.latitude,
        longitude: userDetails.location.longitude,
        email: userDetails.email,
        token,
        role : userDetails.roles
        
    }
    return userData
   } catch (error) {
       console.log('error occured' , error)
    return res.json('error occured')
   }
    
}

module.exports = {
    signupUserModel,
    loginUserModel
}