const {
  log_trainer_model_success,
  log_trainer_model_failed,
} = require("../../../log/app/model/trainer.log");
const { trainerModel } = require("../../core/db/trainer.schema");
const { handleError } = require("../../core/utils");
const {
  Trainer_profile1_Model,
  Trainer_profile2_Model,
  Trainer_profile3_Model,
  Trainer_profile4_Model,
  Trainer_profile5_Model,
} = require("../model/profile");

const updatetrainerprofile1Controller = async (req, res, next) => {
  const { trainerId, experience_level, bio, role, traineeId } = req.body;

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
      bio,
      role,
      traineeId,
    };

    let trainee = await Trainer_profile1_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer profile1 updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updatetrainerprofile2Controller = async (req, res, next) => {
  const {
    trainerId,
    
    traineeId,
    work_experience
  
  } = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 3;
      const eventname = "updateprofile2";
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
    
        traineeId,
        work_experience
      
    };

    let trainee = await Trainer_profile2_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer profile2 updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const updatetrainerprofile3Controller = async (req, res, next) => {
  const { trainerId, traineeId , education_degree, } = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 4;
      const eventname = "updateprofile3";
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
        education_degree , trainerId, traineeId
    };

    let trainee = await Trainer_profile3_Model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer profile3 updated successfully",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};


const updatetrainerprofile5Controller = async (req, res, next) => {
  const { trainerId, traineeId , educational_background} = req.body;

  try {
    const user = await trainerModel.findOne({ _id: trainerId });
    if (!user) {
      //saving to the log
      const userID = traineeId;
      const eventId = 4;
      const eventname = "updateprofile3";
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
        educational_background, trainerId, traineeId
    };

    let trainee = await Trainer_profile5_Model(data, res);

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


const updatetrainerprofile4Controller = async (req, res, next) => {
    const {
      trainerId,
      
      traineeId,
      skills
    
    } = req.body;
  
    try {
      const user = await trainerModel.findOne({ _id: trainerId });
      if (!user) {
        //saving to the log
        const userID = traineeId;
        const eventId = 3;
        const eventname = "updateprofile2";
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
      
          traineeId,
          skills
        
      };
  
      let trainee = await Trainer_profile4_Model(data, res);
  
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
  updatetrainerprofile1Controller,
  updatetrainerprofile2Controller,
    updatetrainerprofile3Controller,
    updatetrainerprofile4Controller,
    updatetrainerprofile5Controller,
};
