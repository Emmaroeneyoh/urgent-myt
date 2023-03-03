const {
  log_trainer_model_success,
} = require("../../../log/app/model/trainer.log");
const { trainerModel } = require("../../core/db/trainer.schema");
const { handleError } = require("../../core/utils");

const Trainer_complete_profile_status = async (id) => {
  const trainer = await trainerModel.findById(id);
  if (
    trainer.profile1_complete == true &&
    trainer.profile2_complete == true &&
    trainer.profile3_complete == true &&
    trainer.profile5_complete == true &&
    trainer.profile4_complete == true
  ) {
      const updateTrainer = await trainerModel.findByIdAndUpdate(id ,   {
        $set: {
          
          profile_completion: true,
        },
      },
      { new: true })
  }
};

const Trainer_profile1_Model = async (data, res) => {
  try {
    const { trainerId, experience_level, bio, role, traineeId } = data;

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $set: {
          profile1: {
            experience_level,
            bio,
            role,
          },
          profile1_complete: true,
        },
      },
      { new: true }
    );
    //end of updating the trainer profile1
      
      //updating the trainer_ccompletion status 
Trainer_complete_profile_status(trainerId)
      //end of updating the trainer completion status

    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 2;
    const eventname = "updateprofile1";
    const log_description = `profile1 updated `;
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

const Trainer_profile2_Model = async (data, res) => {
  try {
    const {
      trainerId,
      work_experience,

      traineeId,
    } = data;
    console.log(work_experience);

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $set: {
          profile2_complete: true,
        },
      },

      { new: true }
    );
    //end of updating the trainer profile1
    //updating the trainer pofile1
    const trainerDetailscompany = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $push: {
          work_experience: { $each: work_experience },
        },
      },

      { new: true }
    );
    //end of updating the trainer profile1

      
      //updating the trainer_ccompletion status 
Trainer_complete_profile_status(trainerId)
//end of updating the trainer completion status
    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 3;
    const eventname = "updateworkexperience";
    const log_description = `work experience updated `;
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
    console.log(error);
    handleError(error.message)(res);
  }
};
const Trainer_profile3_Model = async (data, res) => {
  try {
    const {
      trainerId,
      education_degree,

      traineeId,
    } = data;
    console.log(education_degree);

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $set: {
          profile2_complete: true,
        },
      },

      { new: true }
    );
    //end of updating the trainer profile1
    //updating the trainer pofile1
    const trainerDetailscompany = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $push: {
          education_degree: { $each: education_degree },
        },
      },

      { new: true }
    );
    //end of updating the trainer profile1

      
      //updating the trainer_ccompletion status 
Trainer_complete_profile_status(trainerId)
//end of updating the trainer completion status
    //saving to the log of the affliate
    const userID = traineeId;
    const trainerID = trainerId;
    const eventId = 4;
    const eventname = "updateeducation_degree";
    const log_description = `education degree updated `;
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
    console.log(error);
    handleError(error.message)(res);
  }
};


const Trainer_profile4_Model = async (data, res) => {
  try {
    const {
      trainerId,
      skills,

      traineeId,
    } = data;
    console.log("this is skills ", skills);

    //updating the trainer pofile1
    const trainerDetails = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $set: {
          profile4_complete: true,
        },
      },

      { new: true }
    );
    //end of updating the trainer profile1
    //updating the trainer pofile1
    const trainerDetailscompany = await trainerModel.findByIdAndUpdate(
      trainerId,
      {
        $push: {
          skills: { $each: skills },
        },
      },

      { new: true }
    );
    //end of updating the trainer profile1
      
      
      //updating the trainer_ccompletion status 
Trainer_complete_profile_status(trainerId)
//end of updating the trainer completion status

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
    console.log(error);
    handleError(error.message)(res);
  }
};


const Trainer_profile5_Model = async (data, res) => {
    try {
      const { trainerId,  educational_background , traineeId } = data;
  
      //updating the trainer pofile1
      const trainerDetails = await trainerModel.findByIdAndUpdate(
        trainerId,
        {
          $set: {
            educational_background ,
            profile5_complete: true,
          },
        },
        { new: true }
      );
      //end of updating the trainer profile1
        
        //updating the trainer_ccompletion status 
  Trainer_complete_profile_status(trainerId)
        //end of updating the trainer completion status
  
      //saving to the log of the affliate
      const userID = traineeId;
      const trainerID = trainerId;
      const eventId = 6;
      const eventname = "updateEducationBackground";
      const log_description = `Education Background updated `;
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
  Trainer_profile1_Model,
  Trainer_profile2_Model,
  Trainer_profile3_Model,
  Trainer_profile4_Model,
  Trainer_profile5_Model,
};
