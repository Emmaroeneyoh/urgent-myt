const {
  log_trainer_model_success,
} = require("../../../log/app/model/trainer.log");
const { trainerModel } = require("../../core/db/trainer.schema");
const { handleError } = require("../../core/utils");

const Trainer_experiencelevel_Model = async (data, res) => {
  try {
    const { trainerId, experience_level, traineeId } = data;

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.findByIdAndUpdate(trainerId, {
      $set: { "profile1.experience_level": experience_level },
    });
    //end of updating the trainer profile1

    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 2;
    const eventname = "updateprofile1";
    const log_description = `role profile updated `;
    const logged_data = {
      userID,
      log_description,
      eventname,
      eventId,
      trainerID,
    };
    const log_login = log_trainer_model_success(logged_data, res);
    console.log("this is logged in data");
    //end of saving to the log

    return trainerDetails;
  } catch (error) {
    handleError(error.message)(res);
  }
};
const Trainer_bio_Model = async (data, res) => {
  try {
    const { trainerId, bio, traineeId } = data;

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $set: { "profile1.bio": bio },
      },
      { new: true }
    );
    //end of updating the trainer profile1

    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 2;
    const eventname = "updateprofile1";
    const log_description = `bio profile updated `;
    const logged_data = {
      userID,
      log_description,
      eventname,
      eventId,
      trainerID,
    };
    const log_login = log_trainer_model_success(logged_data, res);
    console.log("this is logged in data");
    //end of saving to the log

    return trainerDetails;
  } catch (error) {
    handleError(error.message)(res);
  }
};

const Trainer_role_Model = async (data, res) => {
  try {
    const { trainerId, role, traineeId } = data;

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $set: { "profile1.role": role },
      },
      { new: true }
    );
    //end of updating the trainer profile1

    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 2;
    const eventname = "updateprofile1";
    const log_description = `expereince level profile updated `;
    const logged_data = {
      userID,
      log_description,
      eventname,
      eventId,
      trainerID,
    };
    const log_login = log_trainer_model_success(logged_data, res);
    console.log("this is logged in data");
    //end of saving to the log

    return trainerDetails;
  } catch (error) {
    handleError(error.message)(res);
  }
};

const Trainer_educational_background_Model = async (data, res) => {
  try {
    const { trainerId, educational_background, traineeId } = data;

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $set: { educational_background },
      },
      { new: true }
    );
    //end of updating the trainer profile1

    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 6;
    const eventname = "updateEducationBackground";
    const log_description = `Education Background updated`;
    const logged_data = {
      userID,
      log_description,
      eventname,
      eventId,
      trainerID,
    };
    const log_login = log_trainer_model_success(logged_data, res);
    console.log("this is logged in data");
    //end of saving to the log

    return trainerDetails;
  } catch (error) {
    handleError(error.message)(res);
  }
};

const Trainer_work_experience_Model = async (data, res) => {
  try {
    const {
      trainerId,
      work_experienceId,
      title,
      company,
      recent_work,
      start_date,
      end_date,
      job_skills,
      role_accomplishment,
      traineeId,
    } = data;

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.updateOne(
      { "work_experience._id": work_experienceId },
      {
        $set: {
          "work_experience.$.title": title,
          "work_experience.$.company": company,
          "work_experience.$.recent_work": recent_work,
          "work_experience.$.start_date": start_date,
          "work_experience.$.end_date": end_date,
          "work_experience.$.job_skills": job_skills,
          "work_experience.$.role_accomplishment": role_accomplishment,
        },
      },
      { new: true }
    );
    //end of updating the trainer profile1

    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 3;
    const eventname = "updateworkexperience";
    const log_description = `work experience updated`;
    const logged_data = {
      userID,
      log_description,
      eventname,
      eventId,
      trainerID,
    };
    const log_login = log_trainer_model_success(logged_data, res);
    console.log("this is logged in data");
    //end of saving to the log

    return trainerDetails;
  } catch (error) {
    handleError(error.message)(res);
  }
};

const Trainer_education_degree_Model = async (data, res) => {
  try {
    const {
      trainerId,
      educational_backgroundId,
      place_of_qaulification,
      in_view,
      graduation_year,
      describe_learning,
      traineeId,
    } = data;

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.updateOne(
      { "education_degree._id": educational_backgroundId },
      {
        $set: {
          "education_degree.$.place_of_qaulification": place_of_qaulification,
          "education_degree.$.in_view": in_view,
          "education_degree.$.graduation_year": graduation_year,
          "education_degree.$.describe_learning": describe_learning,
        },
      },
      { new: true }
    );
    //end of updating the trainer profile1

    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 4;
    const eventname = "updateeducation_degree";
    const log_description = `education degree updated`;
    const logged_data = {
      userID,
      log_description,
      eventname,
      eventId,
      trainerID,
    };
    const log_login = log_trainer_model_success(logged_data, res);
    console.log("this is logged in data");
    //end of saving to the log

    return trainerDetails;
  } catch (error) {
    handleError(error.message)(res);
  }
};

const Trainer_skill_Model = async (data, res) => {
  try {
    const { trainerId, skills, traineeId } = data;

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.findByIdAndUpdate(trainerId, {
      $set: { skills: skills },
    });
    //end of updating the trainer profile1

    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 5;
    const eventname = "updateskills";
    const log_description = `skills updated `;
    const logged_data = {
      userID,
      log_description,
      eventname,
      eventId,
      trainerID,
    };
    const log_login = log_trainer_model_success(logged_data, res);
    console.log("this is logged in data");
    //end of saving to the log

    return trainerDetails;
  } catch (error) {
    handleError(error.message)(res);
  }
};

module.exports = {
  Trainer_experiencelevel_Model,
  Trainer_bio_Model,
  Trainer_role_Model,
  Trainer_educational_background_Model,
  Trainer_work_experience_Model,
  Trainer_education_degree_Model,
  Trainer_skill_Model
};
