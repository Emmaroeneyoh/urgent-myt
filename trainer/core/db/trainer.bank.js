const mongoose = require('mongoose')
const schema = mongoose.Schema

const affliate_schema = new schema({
    trainerId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainer'
    },
    traineeId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainee'
    },
    accountName: {
      type:  String,
  },
  accountNumber: {
      type:  String,
  },
  SB_code: {
      type:  String,
  },
  accountNickname: {
      type:  String,
  },
 
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const trainer_Banks = mongoose.model('trainer_bank', affliate_schema )
module.exports = {
    trainer_Banks
}