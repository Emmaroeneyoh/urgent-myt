const { category_model } = require("../../core/db/course.schema");
const { handleError } = require("../../core/utils");



const retrieve_category_Model = async (data,res) => {
    try {
        const category = await category_model.find()
        
        const subcategory = await category_model.find({ category })
        
        const variant = await category_model.find({ category, subcategory })
        
        const country = await category_model.find({ category, subcategory, variant })
        
        const city = await category_model.find({category, subcategory , variant , country , city})
        
        const category_section = {category , subcategory, variant , country, city}
   


    return category_section
    } catch (error) {
        handleError(error.message)(res)
    }
    
}

module.exports = {
    retrieve_category_Model
}