const {
  single_trainer_session_model,
} = require("../../../trainer/app/model/session");
const { appointmentModel } = require("../../core/db/appointment");
const { handleError } = require("../../core/utils");

const createAppointmentModel = async (data, res) => {
    console.log('creating appointment')
  try {
      const { sessionId, trainerId, traineeId } = data;
      const datas = {sessionId} 
   console.log('this is sess id', sessionId)
    //retrieve the details of the course so we can add the details to the appointment
    const course = await single_trainer_session_model(datas, res);
    console.log(course);
    const category = course.category.category_name;
    const city = course.session_type.city;
    const duration = course.curriculum_duration;
    const progress_bar_increment = 100 / duration; //  we will increment the progress bar by this value

    let complaint_date = new Date(
      course.curriculum[0].durations[0].schedule_date
    );
    let complaint_end = new Date(
      complaint_date.getTime() + 7 * 24 * 60 * 60 * 1000
    );

    //we need to ectract the weeks or month from the curriculim
    const schedule = course.curriculum.map((lecture) => {
      const typeWeekDay = lecture.duration_type; //show whether its weekl or day1
      let moduleTitle = lecture.module_title; //the title for that week
      let attendance = lecture.total_durations; //total days or week for that period
      let start_week = lecture.durations[0].schedule_date;
      let progress = 0; // shows the total progress in count,
      let progress_incrememt = 100 / attendance; //
      let attendanceCount = 0; //what will be used to shaow marking after maring an attendant
      let newDurations = []; //

      lecture.durations.forEach((x) => {
        let period = {
          date: x.schedule_date,
          day: x.day,
          id: (+new Date() * Math.random() * 100).toString(36).substring(0, 13),
        };
        newDurations.push(period);
      });
      // console.log(lecture)
      let newCurriculum = {
        typeweekday: typeWeekDay,
        moduletitle: moduleTitle,
        attendance: attendance,
        attendanceCount: attendanceCount,
        progress: progress,
        progress_incrememt: progress_incrememt,
        is_completed: false,
        id: (+new Date() * Math.random() * 100).toString(36).substring(0, 13),
        duration: newDurations,
        start_date: start_week,
      };

      return newCurriculum;
    });
    console.log("this is schedule", schedule);
    const form = await new appointmentModel({
      sessionId,
      trainerId,
      complaint_end: complaint_end,

      category,
      city,
      duration: duration,
      progress_count: progress_bar_increment,
      traineeId,
      schedule: {
        default: schedule,
      },
    });
    const userDetails = await form.save();

    console.log("this is schedule", complaint_end);

    return userDetails;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const all_trainee_appointment_model = async (data, res) => {
  try {
    const { traineeId } = data;
    const courses = await appointmentModel.find({ traineeId: traineeId });
    //   .populate({ path: "sessionId", select: "category" });

    return courses;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const all_filtered_trainee_appointment_model = async (data, res) => {
  try {
    const { traineeId, category, duration, city, progress } = data;
    const courses = await appointmentModel
      .find({
        traineeId: traineeId,
        category,
        duration,
        city,
        progress,
      })
      .populate({
        path: "sessionId",
        select: "category sub_category session_image",
      });

    return courses;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const single_trainee_appointment_model = async (data, res) => {
  try {
      const { appointmentId } = data;
    const courses = await appointmentModel.findById({ _id: appointmentId });

    return courses;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  createAppointmentModel,
  all_trainee_appointment_model,
  all_filtered_trainee_appointment_model,
  single_trainee_appointment_model,
};
