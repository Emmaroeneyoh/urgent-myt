const { trainerModel } = require("../../core/db/trainer.schema");
const { trainersession } = require("../../core/db/trainer.session");
const { handleError } = require("../../core/utils");

const create_trainer_session_model = async (data, res) => {
  try {
    const {
      trainerId,
      traineeId,
      category_name,
      default_category,
      sub_category_name,
      default_sub_category,
      variant_name,
      default_variant,
      slot,
      min,
      max,
      session_type,
    } = data;
    const train = await trainerModel.findById(trainerId);
    console.log("this is the train", train);
    const trainer = await new trainersession({
      traineeId,
      trainerId,
      category: {
        category_name: category_name,
        default_category: default_category,
      },
      sub_category: {
        sub_category_name: sub_category_name,
        default_sub_category: default_sub_category,
      },
      variant: {
        variant_name: variant_name,
        default_variant: default_variant,
      },
      slot,
      age: {
        min: min,
        max: max,
      },
      session_type: session_type,
      course_bank: train.active_bank,
      curriculum: ["ert"],
    });
    const userDetails = await trainer.save();

    //now check if there is any added category and change to added category to false
    if (
      userDetails.category.default_category === false ||
      userDetails.sub_category.default_sub_category == false ||
      userDetails.variant.default_variant == false
    ) {
      const updateTrainer = await trainersession.findByIdAndUpdate(
        userDetails._id,
        {
          $set: {
            added_category: true,
          },
        },
        { new: true }
      );
    }
    // //saving to the log
    // const userID = traineeId;
    // const trainerID = trainerId;
    // const eventId = 7;
    // const eventname = "bankregistration";
    // const log_description = `bank account created`;
    // const logged_data = {
    //   userID,
    //   log_description,
    //   eventname,
    //   eventId,
    //   trainerID,
    // };
    // const log_login = log_trainer_model_success(logged_data, res);
    // console.log("this is logged in data");
    // //end of saving to the log
    return userDetails;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const create_trainer_session1_model = async (data, res) => {
  try {
    const {
      trainerId,
      traineeId,
      sessionId,
      session_image,
      session_description,
    } = data;
    const trainer = await trainersession.findByIdAndUpdate(sessionId, {
      $set: { session_image, session_description, session_profile1: true },
    });

    // //saving to the log
    // const userID = traineeId;
    // const trainerID = trainerId;
    // const eventId = 7;
    // const eventname = "bankregistration";
    // const log_description = `bank account created`;
    // const logged_data = {
    //   userID,
    //   log_description,
    //   eventname,
    //   eventId,
    //   trainerID,
    // };
    // const log_login = log_trainer_model_success(logged_data, res);
    // console.log("this is logged in data");
    // //end of saving to the log
    return trainer;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const create_trainer_session2_model = async (data, res) => {
  console.log("working");
  try {
    const {
      trainerId,
      traineeId,
      sessionId,
      subscription_type,
      mark_attendance,
    } = data;
    const trainer = await trainersession.findByIdAndUpdate(sessionId, {
      $set: { subscription_type, mark_attendance, session_profile2: true },
    });

    // //saving to the log
    // const userID = traineeId;
    // const trainerID = trainerId;
    // const eventId = 7;
    // const eventname = "bankregistration";
    // const log_description = `bank account created`;
    // const logged_data = {
    //   userID,
    //   log_description,
    //   eventname,
    //   eventId,
    //   trainerID,
    // };
    // const log_login = log_trainer_model_success(logged_data, res);
    // console.log("this is logged in data");
    // //end of saving to the log
    return trainer;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const create_trainer_session3_model = async (data, res) => {
  try {
    const {
      sessionId,
      days_of_occurence,
      type_of_occurence,
      traineeId,
      start_time,
      end_time,
    } = data;
    //updating the trainer pofile1
    const trainerDetails = await trainersession.findByIdAndUpdate(
      sessionId,
      {
        $set: {
          time_of_occurence: {
            start_time: start_time,
            end_time: end_time,
          },
          type_of_occurence,
          days_of_occurence,
          session_profile3: true,
        },
      },

      { new: true }
    );
    //end of updating the trainer profile1

    //end of updating the trainer profile1
    return trainerDetails;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const create_trainer_session4_model = async (data, res) => {
  try {
    console.log("working");
    const {
      sessionId,
      curriculum,
      curriculum_type,
      traineeId,
      curriculum_duration,
    } = data;

    //updating the trainer pofile1

    const trainerDetails = await trainersession.findByIdAndUpdate(
      sessionId,
      {
        $set: {
          session_profile4: true,
          curriculum,
          curriculum_type,
          curriculum_duration,
        },
      },

      { new: true }
    );

    //saving to the log of the affliate
    //   const userID = traineeId;
    //   const trainerID = trainerId;
    //   const eventId = 3;
    //   const eventname = "updateworkexperience";
    //   const log_description = `work experience updated `;
    //   const logged_data = {
    //     userID,
    //     log_description,
    //     eventname,
    //     eventId,
    //     trainerID,
    //   };
    //   const log_login = log_trainer_model_success(logged_data, res);
    //   console.log("this is logged in data");
    //end of saving to the log

    return trainerDetails;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const create_trainer_session5_model = async (data, res) => {
  console.log("working");
  try {
    const {
      trainerId,
      traineeId,
      sessionId,
      pricing,
      pricing_method,
      course_bank,
      who_pays,
      cancellation_fee,
    } = data;
    const trainer = await trainersession.findByIdAndUpdate(sessionId, {
      $set: {
        pricing,
        pricing_method,
        course_bank,
        fee_management: {
          who_pays,
          cancellation_fee,
        },
        session_profile5: true,
      },
    });

    // //saving to the log
    // const userID = traineeId;
    // const trainerID = trainerId;
    // const eventId = 7;
    // const eventname = "bankregistration";
    // const log_description = `bank account created`;
    // const logged_data = {
    //   userID,
    //   log_description,
    //   eventname,
    //   eventId,
    //   trainerID,
    // };
    // const log_login = log_trainer_model_success(logged_data, res);
    // console.log("this is logged in data");
    // //end of saving to the log
    return trainer;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

//retrieving a single session

const single_trainer_session_model = async (data, res) => {
  try {
    const { sessionId } = data;
    console.log('this is session id', sessionId)
    const userData = await trainersession.findById({ _id: sessionId });

    return userData;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const trainer_sessions_model = async (data, res) => {
  try {
    const { trainerId } = data;
    const userData = await trainersession.find({ trainerId});

    return userData;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const filtered_trainer_session_model = async (data, res) => {
  try {
    const {
      category,
      sub_category,
      variant,
      country,
      city,
      session_type,
      age,
      max_price,
      min_price,
    } = data;
    const userData = await trainersession
      .find({
        "category.category_name": category,
        "sub_category.sub_category_name": sub_category,
        "variant.variant_name": variant,
        "age.min": { $lt: age[0]},
        "age.max":{ $gt: age[1]},
        "pricing.price.price": { $lt: min_price},
        "pricing.price.price": { $gt: max_price},
        "session_type.country": country,
        "session_type.city":city,
        "session_type.onlinecourse":session_type,
      })
      .populate({
        path: "traineeId",
        select: "name phoneNumber",
      });

    return userData;
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  create_trainer_session_model,
  create_trainer_session1_model,
  create_trainer_session2_model,
  create_trainer_session4_model,
  create_trainer_session5_model,
  create_trainer_session3_model,
  single_trainer_session_model,
  filtered_trainer_session_model , trainer_sessions_model
};
