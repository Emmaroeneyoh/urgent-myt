const {
  log_trainer_model_failed,
} = require("../../../log/app/model/trainer.log");
const { trainerModel } = require("../../core/db/trainer.schema");
const { handleError } = require("../../core/utils");
const {
  Trainer_experiencelevel_Model,
  Trainer_bio_Model,
  Trainer_role_Model,
  Trainer_educational_background_Model,
  Trainer_work_experience_Model,
  Trainer_education_degree_Model,
  Trainer_skill_Model,
} = require("../model/edit.profile");

const updatetrainerexperienceController = async (req, res, next) => {
  const { trainerId, experience_level, traineeId } = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 2;
      const eventname = "updateprofile1";
      const log_description = `trainer dont exist on our system`;
      const logged_data = { userID, log_description, eventname, eventId };
      const log_login = log_trainer_model_failed(logged_data, res);
      console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainer dont exist",

        error: "trainer dont exist",
      });
    }

    const data = {
      trainerId,
      experience_level,
      traineeId,
    };

    let trainee = await Trainer_experiencelevel_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer experience level updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updatetrainerbioController = async (req, res, next) => {
  const { trainerId, bio, traineeId } = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 2;
      const eventname = "updateprofile1";
      const log_description = `trainer dont exist on our system`;
      const logged_data = { userID, log_description, eventname, eventId };
      const log_login = log_trainer_model_failed(logged_data, res);
      console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainer dont exist",

        error: "trainer dont exist",
      });
    }

    const data = {
      trainerId,
      bio,
      traineeId,
    };

    let trainee = await Trainer_bio_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer bio updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updatetrainerRoleController = async (req, res, next) => {
  const { trainerId, role, traineeId } = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 2;
      const eventname = "updateprofile1";
      const log_description = `trainer dont exist on our system`;
      const logged_data = { userID, log_description, eventname, eventId };
      const log_login = log_trainer_model_failed(logged_data, res);
      console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainer dont exist",

        error: "trainer dont exist",
      });
    }

    const data = {
      trainerId,
      role,
      traineeId,
    };

    let trainee = await Trainer_role_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer role updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updatetrainerbackgroundController = async (req, res, next) => {
  const { trainerId, educational_background, traineeId } = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 6;
      const eventname = "updateEducationBackground";
      const log_description = `trainer dont exist on our system`;
      const logged_data = { userID, log_description, eventname, eventId };
      const log_login = log_trainer_model_failed(logged_data, res);
      console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainer dont exist",

        error: "trainer dont exist",
      });
    }

    const data = {
      trainerId,
      educational_background,
      traineeId,
    };

    let trainee = await Trainer_educational_background_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer educational_background updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updatetrainerwork_experienceController = async (req, res, next) => {
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
  } = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 6;
      const eventname = "updateEducationBackground";
      const log_description = `trainer dont exist on our system`;
      const logged_data = { userID, log_description, eventname, eventId };
      const log_login = log_trainer_model_failed(logged_data, res);
      console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainer dont exist",

        error: "trainer dont exist",
      });
    }

    const data = {
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
    };

    let trainee = await Trainer_work_experience_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer educational_background updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updateeducation_degreeController = async (req, res, next) => {
  const {
    trainerId,
    educational_backgroundId,
    place_of_qaulification,
    in_view,
    graduation_year,
    describe_learning,
    traineeId,
  } = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 4;
      const eventname = "updateeducation_degree";
      const log_description = `education degree updated`;
      const logged_data = { userID, log_description, eventname, eventId };
      const log_login = log_trainer_model_failed(logged_data, res);
      console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainer dont exist",

        error: "trainer dont exist",
      });
    }

    const data = {
      trainerId,
      educational_backgroundId,
      place_of_qaulification,
      in_view,
      graduation_year,
      describe_learning,
      traineeId,
    };

    let trainee = await Trainer_education_degree_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer educational_background updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};


const updatetrainerskillController = async (req, res, next) => {
  const { trainerId, skills, traineeId } = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 5;
      const eventname = "updateskills";
      const log_description = `trainer dont exist on our system`;
      const logged_data = { userID, log_description, eventname, eventId };
      const log_login = log_trainer_model_failed(logged_data, res);
      console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainer dont exist",

        error: "trainer dont exist",
      });
    }

    const data = {
      trainerId,
     skills,
      traineeId,
    };

    let trainee = await Trainer_skill_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer skills updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  updatetrainerexperienceController,
  updatetrainerRoleController,
  updatetrainerbioController,
  updatetrainerbackgroundController,
  updatetrainerwork_experienceController,
  updateeducation_degreeController, updatetrainerskillController
};
