const mongoose = require('mongoose')
const schema = mongoose.Schema

const affliate_schema = new schema({
    affliateId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'affliate'
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
const affliate_Banks = mongoose.model('affliate_bank', affliate_schema )
module.exports = {
    affliate_Banks
}