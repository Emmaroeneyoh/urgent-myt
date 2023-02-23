const { number } = require('joi')
const mongoose = require('mongoose')
const schema = mongoose.Schema

const affliate_schema = new schema({
   
    
    traineeId: {
        type:  mongoose.Schema.Types.ObjectId,
         ref:'trainee'
    },
    active_bank: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'affliate_bank',
        default  : "123456789192"
 },
    promocode: {
        type: Number,
        
 },
    trainers: {
      default: [],
      type: [
          {
             
              trainerId: {
                  type:  mongoose.Schema.Types.ObjectId,
                   ref:'trainer'
              }
          }
      ]
  },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const affliate_model = mongoose.model('affliate', affliate_schema )
module.exports = {
    affliate_model
}