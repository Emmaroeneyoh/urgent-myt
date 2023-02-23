const {
  log_affliate_model_failed,
  log_affliate_model_success,
} = require("../../../log/app/model/affliate.log");
const { affliate_model } = require("../../core/db/affliate.schema");
const { affliate_Banks } = require("../../core/db/affliate_banks");

const { handleError } = require("../../core/utils");
const { create_affliate_model } = require("../model/auth");
const {
  create_affliate_bank_model,
  switch_active_bank_model,
  single_affliate_bank_model,
  all_affliate_bank_model,
} = require("../model/bank");

const createAffliateBankController = async (req, res, next) => {
  const {
    traineeId,
    accountName,
    accountNumber,
    SB_code,
    accountNickname,
    affliateId,
  } = req.body;
  try {
    //checking if user exist already
    const bank = await affliate_Banks.findOne({
      traineeId: traineeId,
      accountNickname: accountNickname,
    });
    if (bank) {
      //saving to the log
      const userID = traineeId;
      const affliateID = bank.affliateId;
      const eventId = 2;
      const eventname = "bankregistration";
      const log_description = `bank account with that nickname already exist  `;
      const logged_data = {
        userID,
        log_description,
        eventname,
        eventId,
        affliateID,
      };
      const log_login = log_affliate_model_failed(logged_data, res);
      console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "bank account with that nickname already exist",
        error: "bank account with that nickname already exist",
      });
    }

    const data = {
      traineeId,
      accountName,
      accountNumber,
      SB_code,
      accountNickname,
      affliateId,
    };

    let trainee = await create_affliate_bank_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "bank account created ",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const switchactiveBankController = async (req, res, next) => {
  const { affliateId, bankId } = req.body;
  try {
    //checking if user exist already
    const bank = await affliate_Banks.findById({ _id: bankId });
    if (!bank) {
      //saving to the log
      const userID = "null";
      const affliateID = "null";
      const eventId = 4;
      const eventname = "activebank";
      const log_description = `bank account dont exist  `;
      const logged_data = {
        userID,
        log_description,
        eventname,
        eventId,
        affliateID,
      };
      const log_login = log_affliate_model_failed(logged_data, res);
      console.log("this is logged in data");
      //end of saving to the log
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "bank account dont exist",
        error: "bank account dont exist",
      });
    }

    const data = {
      affliateId,
      bankId,
    };

    let trainee = await switch_active_bank_model(data, res);
    //saving to the log
    const userID = bank.traineeId;
    const affliateID = bank.affliateId;
    const eventId = 4;
    const eventname = "activebank";
    const log_description = `bank account now switched to active bank account  `;
    const logged_data = {
      userID,
      log_description,
      eventname,
      eventId,
      affliateID,
    };
    const log_login = log_affliate_model_success(logged_data, res);
    console.log("this is logged in data");
    //end of saving to the log
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "bank account now switched to active bank account",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const singleAffliateBankController = async (req, res, next) => {
  const { bankId } = req.body;
  try {
    //checking if user exist already
    const client = await affliate_Banks.findById({ _id: bankId });
    if (!client) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "affliate  bank account dont exist",
        data: [],
        error: "affliate bank account dont exist",
      });
    }

    const data = {
      bankId,
    };

    let trainee = await single_affliate_bank_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "affliate bank successfully retrieved",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const allAffliateBankController = async (req, res, next) => {
  const { affliateId } = req.body;
  try {
    //checking if user exist already
    const client = await affliate_model.findById({ _id: affliateId });
    if (!client) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "affliate  account dont exist",
        data: [],
        error: "affliate  account dont exist",
      });
    }

    const data = {
      affliateId,
    };

    let trainee = await all_affliate_bank_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "affliate banks successfully retrieved",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  createAffliateBankController,
  switchactiveBankController,
  singleAffliateBankController,
  allAffliateBankController,
};
