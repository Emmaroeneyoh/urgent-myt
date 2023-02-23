// const { log_affliate_model } = require("../../../log/app/model/affliate.log");
// const { log_affliate_reigster } = require("../../../log/core/db/affliate.register");
const { userModel } = require("../../../user/core/db/user.schema");
const { affliate_model } = require("../../core/db/affliate.schema");
const { affliate_Banks } = require("../../core/db/affliate_banks");
const { handleError } = require("../../core/utils");
const { create_affliate_bank_model } = require("./bank");

const create_affliate_model = async (data,res) => {
    try {
        const { traineeId ,  accountName , accountNumber ,  SB_code ,  accountNickname } = data
        const userData = await userModel.findById({ _id: traineeId });
        const promocode = (Math.floor(100000 + Math.random() * 900000))
        
        //create the affliate bank
        const affliate_bank_creation = await create_affliate_bank_model(data, res)
        const bankId = affliate_bank_creation._id
        //end of creating the affliate bank
        //create the affliate model
    const affliate = await new affliate_model({
        traineeId,
        promocode,
        active_bank : bankId
       
      });
        const userDetails = await affliate.save();
        //end of the affliate model

          //updating the affliate bank to put bankId 

    const updatebank = await affliate_Banks.findByIdAndUpdate({_id:bankId},  { $set: { 
        affliateId :  userDetails._id
    }
    }) 
        
        //end of updating the affliate bank
        
        //updating the affliate bank to active 

    const updateaffliate = await affliate_model.findByIdAndUpdate({_id:affliate._id},  { $set: { 
        active_bank :  bankId
    }
    }) 
        
        //end of updating the affliate bank
        
        //updating the user to add affliate role
        const updateUser = await userModel.findByIdAndUpdate({_id:traineeId}, {
            $push : {
                roles: "affliate"
            }
        })
        
        //end of updating the user to update the affliate role

    return updateaffliate
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}


const single_affliate_model = async (data,res) => {
    try {
        const { affliateId  } = data
        const userData = await affliate_model.findById({ _id: affliateId });
      

    return userData
    } catch (error) {
        console.log(error)
        handleError(error.message)(res)
    }
    
}


module.exports = {
    create_affliate_model , single_affliate_model
}