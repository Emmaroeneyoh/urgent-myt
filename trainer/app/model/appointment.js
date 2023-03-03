const { appointmentModel } = require("../../../user/core/db/appointment");
const { handleError } = require("../../core/utils");

const mark_attendance_model = async (data, res) => {
  try {
    const { trainerId, traineeId, appointmentId, moduleId } = data;
    console.log("this is data json", appointmentId, moduleId);
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
 
      const trainerDetails = await appointmentModel.updateOne(
        { "schedule.default.id": moduleId },
        {
          $inc: {
            "schedule.default.$.attendanceCount": 1,
            "schedule.default.$.progress": module.progress_incrememt,
          },
        },
        { new: true }
      );
    // }
    //end of increment the attendance count and progress

    //check if attendace count is equal to the attendance , and progress is equal to 100, change is_complete to true

    const session1 = await appointmentModel.findOne({
      _id: appointmentId,
      "schedule.default.id": moduleId,
    });

    //find the module that needs to be updated by filtering it out
    const editmodule1 = session1.schedule.default;

    const module1 = editmodule1.find((x) => {
      return (x.id == moduleId);
    });

    if (
      module1.attendanceCount == module1.attendance &&
      module1.progress == 100
    ) {
      const trainerDetails = await appointmentModel.updateOne(
        { "schedule.default.id": moduleId },
        {
          $set: {
            "schedule.default.$.is_completed": true,
          },
        },
        { new: true }
      );
    }
    //end of changing the obejct is_complete to true

    //check if the current modified object is_complete equal to true and increment the module attendace count by 1 , progress by the porgress count
      
    const session2 = await appointmentModel.findOne({
      _id: appointmentId,
      "schedule.default.id": moduleId,
    });

    //find the module that needs to be updated by filtering it out
    const editmodule2 = session2.schedule.default;

    const module2 = editmodule2.find((x) => {
      return (x.id == moduleId);
    });
    if (
        module2.is_completed  == true
      ) {
        const trainerDetails = await appointmentModel.findByIdAndUpdate(
          appointmentId,
          {
            $inc: {
                 progress : session2.progress_count,
                attendanceCount : 1
              },
          },
          { new: true }
        );
      }
      
     //end of checking if a module is_completed.
      
      //now check if the main attebdance count =is equal to duration and progress = 100

      const session3 = await appointmentModel.findOne({
        _id: appointmentId,
        "schedule.default.id": moduleId,
      });
  
      //find the module that needs to be updated by filtering it out
     
      if (
          session3.progress == 100 && session3.attendanceCount == session3.duration
        ) {
          const trainerDetails = await appointmentModel.findByIdAndUpdate(
            appointmentId,
            {
              $set: {
                  is_completed : true
                },
            },
            { new: true }
          );
        }

    //   console.log( 'this is session ' , session)
    return session;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  mark_attendance_model,
};
