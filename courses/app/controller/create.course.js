const { category_model } = require("../../core/db/course.schema");
const { create_category_Model } = require("../model/create.course");
const { handleError } = require("../../core/utils");



const createcourseController = async (req, res, next) => {
    const {
        category, subcategory, variant, country, city
    } = req.body;
    try {
     
  
      const data = {
        category, subcategory, variant, country, city
      };
  
      let trainee = await create_category_Model(data, res);
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "category created ",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
    createcourseController
}