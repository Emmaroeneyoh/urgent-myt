const { category_model } = require("../../core/db/course.schema");
const { create_category_Model } = require("../model/create.course");
const { handleError } = require("../../core/utils");
const { make_payment_Model } = require("../model/payment.course");



const makepaymentController = async (req, res, next) => {
    const {
        traineeId,
        trainerId,
        sessionId,
        number_of_attendee,
        total_amount,
        type_of_applicant,applicantId 
    } = req.body;
    try {
     
  
      const data = {
        traineeId,
        trainerId,
        sessionId,
        number_of_attendee,
        total_amount,
        type_of_applicant,applicantId 
      };
  
      let trainee = await make_payment_Model(data, res);
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "you have successfully purchased this course ",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
    makepaymentController
}