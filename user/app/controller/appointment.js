const { appointmentModel } = require("../../core/db/appointment");
const { handleError } = require("../../core/utils");
const { all_trainee_appointment_model, all_filtered_trainee_appointment_model, single_trainee_appointment_model } = require("../model/appointment");


const traineeAllapointmentController = async (req, res, next) => {
    const { traineeId } = req.body;
    try {
      //checking if user exist already
      const client = await appointmentModel.find({ traineeId});
      if (!client) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "trainee does not have any appointment ",
          data: [],
          error: "trainee does not have any appointment ",
        });
      }
  
      const data = {
     traineeId
      };
  
      let trainee = await all_trainee_appointment_model(data, res);
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "trainee appointments retrieved",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};

const traineeAllfilteredapointmentController = async (req, res, next) => {
    const {  traineeId , category, duration, city , progress } = req.body;
    try {
      //checking if user exist already
      const client = await appointmentModel.find({ traineeId});
      if (!client) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "trainee does not have any appointment ",
          data: [],
          error: "trainee does not have any appointment ",
        });
      }
  
      const data = {
        traineeId , category, duration, city , progress
      };
  
      let trainee = await all_filtered_trainee_appointment_model(data, res);
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "trainee appointments retrieved",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};


const traineesingleapointmentController = async (req, res, next) => {
    const { appointmentId } = req.body;
    try {
      //checking if user exist already
      const client = await appointmentModel.findById({ _id:appointmentId});
      if (!client) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "trainee does not have any appointment ",
          data: [],
          error: "trainee does not have any appointment ",
        });
      }
  
      const data = {
        appointmentId
      };
  
      let trainee = await single_trainee_appointment_model(data, res);
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "trainee appointments retrieved",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
    traineeAllapointmentController , traineeAllfilteredapointmentController , traineesingleapointmentController
}