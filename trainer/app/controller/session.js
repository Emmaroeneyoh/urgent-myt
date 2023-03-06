const { trainersession } = require("../../core/db/trainer.session");
const { handleError } = require("../../core/utils");
const {
  create_trainer_session_model,
  create_trainer_session1_model,
  create_trainer_session2_model,
  create_trainer_session4_model,
  create_trainer_session5_model,
  create_trainer_session3_model,
  filtered_trainer_session_model,
  single_trainer_session_model,
  trainer_sessions_model,
} = require("../model/session");

const createtrainersessionController = async (req, res, next) => {
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
  } = req.body;
  try {
    const data = {
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
    };

    let trainee = await create_trainer_session_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "session  created ",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const createtrainersession1Controller = async (req, res, next) => {
  const {
    trainerId,
    traineeId,
    sessionId,
    session_image,
    session_description,
  } = req.body;
  try {
    const session = await trainersession.findOne({ _id: sessionId });
    if (!session) {
      //saving to the log
      // const userID = traineeId;
      // const eventId = 2;
      // const eventname = "updateprofile1";
      // const log_description = `trainer dont exist on our system`;
      // const logged_data = { userID, log_description, eventname, eventId };
      // const log_login = log_trainer_model_failed(logged_data, res);
      // console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "session dont exist",

        error: "session dont exist",
      });
    }

    const data = {
      trainerId,
      traineeId,
      sessionId,
      session_image,
      session_description,
    };

    let trainee = await create_trainer_session1_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "session  updated ",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const createtrainersession2Controller = async (req, res, next) => {
  const {
    trainerId,
    traineeId,
    sessionId,
    subscription_type,
    mark_attendance,
  } = req.body;
  try {
    const session = await trainersession.findOne({ _id: sessionId });
    if (!session) {
      //saving to the log
      // const userID = traineeId;
      // const eventId = 2;
      // const eventname = "updateprofile1";
      // const log_description = `trainer dont exist on our system`;
      // const logged_data = { userID, log_description, eventname, eventId };
      // const log_login = log_trainer_model_failed(logged_data, res);
      // console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "session dont exist",

        error: "session dont exist",
      });
    }

    const data = {
      trainerId,
      traineeId,
      sessionId,
      subscription_type,
      mark_attendance,
    };

    let trainee = await create_trainer_session2_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "session  updated ",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const createtrainersession3Controller = async (req, res, next) => {
  const {   sessionId,
    traineeId,
    curriculum,
    curriculum_duration,
    custom_time,
    curriculum_type,
    start_time,
    end_time,
    start_date,
    end_date,} =
    req.body;
  try {
    const session = await trainersession.findOne({ _id: sessionId });
    if (!session) {
      //saving to the log
      // const userID = traineeId;
      // const eventId = 2;
      // const eventname = "updateprofile1";
      // const log_description = `trainer dont exist on our system`;
      // const logged_data = { userID, log_description, eventname, eventId };
      // const log_login = log_trainer_model_failed(logged_data, res);
      // console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "session dont exist",

        error: "session dont exist",
      });
    }

    const data = {
      sessionId,
      traineeId,
      curriculum,
      curriculum_duration,
      custom_time,
      curriculum_type,
      start_time,
      end_time,
      start_date,
      end_date,
    };

    let trainee = await create_trainer_session3_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "session  updated ",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const createtrainersession4Controller = async (req, res, next) => {
  const { trainerId, traineeId, sessionId, curriculum, curriculum_type , curriculum_duration } =
    req.body;
  try {
    const session = await trainersession.findOne({ _id: sessionId });
    if (!session) {
      //saving to the log
      // const userID = traineeId;
      // const eventId = 2;
      // const eventname = "updateprofile1";
      // const log_description = `trainer dont exist on our system`;
      // const logged_data = { userID, log_description, eventname, eventId };
      // const log_login = log_trainer_model_failed(logged_data, res);
      // console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "session dont exist",

        error: "session dont exist",
      });
    }

    const data = {
      trainerId,
      traineeId,
      sessionId,
      curriculum,
      curriculum_type,
      curriculum_duration
    };

    let trainee = await create_trainer_session4_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "session  updated ",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const createtrainersession5Controller = async (req, res, next) => {
  const {
    trainerId,
    traineeId,
    sessionId,
    pricing,
    pricing_method,
    course_bank,
    who_pays,
    cancellation_fee,
  } = req.body;
  try {
    const session = await trainersession.findOne({ _id: sessionId });
    if (!session) {
      //saving to the log
      // const userID = traineeId;
      // const eventId = 2;
      // const eventname = "updateprofile1";
      // const log_description = `trainer dont exist on our system`;
      // const logged_data = { userID, log_description, eventname, eventId };
      // const log_login = log_trainer_model_failed(logged_data, res);
      // console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "session dont exist",

        error: "session dont exist",
      });
    }

    const data = {
      trainerId,
      traineeId,
      sessionId,
      pricing,
      pricing_method,
      course_bank,
      who_pays,
      cancellation_fee,
    };

    let trainee = await create_trainer_session5_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "session  updated ",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const filteredtrainersessionController = async (req, res, next) => {
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
  } = req.body;
  try {
  

    const data = {
      category,
      sub_category,
      variant,
      country,
      city,
      session_type,
      age,
      max_price,
      min_price,
    };

    let trainee = await filtered_trainer_session_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "sessions retrieved",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const singletrainersessionController = async (req, res, next) => {
  const { sessionId } = req.body;
  try {
 
    //checking if user exist already
    const client = await trainersession.findById({_id: sessionId});
    if (!client) {

      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "course dont exist",
        data: [],
        error: "course dont exist",
      });
    }

    

    const data = {
      sessionId
    };

    let trainee = await single_trainer_session_model(data, res);
  
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "course successfully retrieved",
      data: trainee,
      
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res)
  }
};

const trainersessionsController = async (req, res, next) => {
  const { trainerId } = req.body;
  try {
 
    //checking if user exist already
    const client = await trainersession.findOne({trainerId});
    if (!client) {

      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "course dont exist",
        data: [],
        error: "course dont exist",
      });
    }

    

    const data = {
      trainerId
    };

    let trainee = await trainer_sessions_model(data, res);
  
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "course successfully retrieved",
      data: trainee,
      
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res)
  }
};


module.exports = {
  createtrainersessionController,
  createtrainersession1Controller,
  createtrainersession2Controller,
  createtrainersession4Controller,
  createtrainersession5Controller, createtrainersession3Controller,
  filteredtrainersessionController , singletrainersessionController,trainersessionsController
};
