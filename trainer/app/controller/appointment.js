const { appointmentModel } = require("../../../user/core/db/appointment");
const { handleError } = require("../../core/utils");
const { mark_attendance_model } = require("../model/appointment");




const markattendanceController = async (req, res, next) => {
    const { trainerId, traineeId, appointmentId, moduleId } = req.body;
    try {
      //checking if user exist already
      const client = await appointmentModel.findById({ _id: appointmentId });
      if (!client) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "appointment  dont exist",
          data: [],
          error: "appointment dont exist",
        });
        }
        
        const session = await appointmentModel.findOne({
            _id: appointmentId,
            "schedule.default.id": moduleId,
          });
      
          //find the module that needs to be updated by filtering it out
          const editmodule = session.schedule.default;
      
          const module = editmodule.find((x) => {
            return (x.id == moduleId);
          });
          //check if attendance count is greater than attendance , then make the update
          if (module.attendanceCount >= module.attendance) {
              return res.status(400).json({
                  status_code: 400,
                  status: true,
                  message: "attendance is already complete",
                });
          }
  
      const data = {
        trainerId, traineeId, appointmentId , moduleId 
      };
      
      let trainee = await mark_attendance_model(data, res);
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "attendance successfully marked",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  

module.exports = {
    markattendanceController
}