const mongoose = require('mongoose')
const schema = mongoose.Schema

const affliate_schema = new schema({
   
    
    category: {
        type:  String,
    },
  
    
    subcategory: {
        type:  String,
    },
  
    
    variant: {
        type:  String,
    },
  
    
    country: {
        type:  String,
    },
    city: {
        type:  String,
    },
  


    createdAt : {
        type: Date,
        default:Date.now
    }
})
const category_model = mongoose.model('category_selection', affliate_schema )
module.exports = {
    category_model
}