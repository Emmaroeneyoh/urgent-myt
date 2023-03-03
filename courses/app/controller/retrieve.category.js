const { category_model } = require("../../core/db/course.schema");
const { handleError } = require("../../core/utils");

const retrieve_category_controller = async (data, res) => {
  try {
      const category = await category_model.find();
      console.log(category[0])
    const ncategory = category[0].category;
    const nsubcat = category[0].subcategory;
    const nvariant = category[0].variant;
    const ncountry = category[0].country;
    const ncity = category[0].city;

    const subcategory = await category_model.find({
      category: ncategory,
      
    });

    const variant = await category_model.find({
      category: ncategory,
      subcategory: nsubcat,
      
    });

    const country = await category_model.find({
      category: ncategory,
      subcategory: nsubcat,
      variant: nvariant,
      country: ncountry,
    });

    const city = await category_model.find({
        category: ncategory,
      subcategory: nsubcat,
      variant: nvariant,
        country: ncountry,
      city: ncity
    });

    const category_section = { ncategory, subcategory, variant, country, city };

    return res.status(200).json({
        status_code: 200,
        status: true,
        message: "category retrieved ",
        data: category_section,
      });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  retrieve_category_controller,
};
