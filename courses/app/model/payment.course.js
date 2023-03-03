const { createAppointmentModel } = require("../../../user/app/model/appointment");
const { category_model } = require("../../core/db/course.schema");
const {  sessionpayment_model } = require("../../core/db/payment.schema");
const { handleError } = require("../../core/utils");

const make_payment_Model = async (data, res) => {
  try {
    const {
      traineeId,
      trainerId,
      sessionId,
      number_of_attendee,
      total_amount,
      type_of_applicant,applicantId 
      } = data;
      
      const datas = { traineeId , trainerId , sessionId}
console.log('appid', applicantId)
    const form = await new sessionpayment_model({
        traineeId,
        trainerId,
        sessionId,
        pricing_plan: {
            number_of_attendee ,total_amount
        },
        applicant: {
            type_of_applicant , applicantId
        }
    });

    const trainerDetails = await form.save();

      console.log('working nowert')
      const appointment = await createAppointmentModel(datas , res)
    //         //saving to the log
    //     const trainerID = trainerDetails._id

    // const EventName = 'registration'
    // const Log_Description = `a trainer account has successfully been registered`
    // const Logged_Data = { userID : traineeId , log_description : Log_Description , eventname : EventName , eventId : 1 , trainerID}
    // const Log_Login =  log_trainer_model_success(Logged_Data,res)
    // console.log('this is logged in data')
    // //end of saving to the log

    return trainerDetails;
  } catch (error) {
    console.log(error)
    handleError(error.message)(res);
  }
};

module.exports = {
    make_payment_Model
};
