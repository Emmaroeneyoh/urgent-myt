const {
  log_trainer_model_failed,
  log_trainer_model_success,
} = require("../../../log/app/model/trainer.log");
const { trainer_Banks } = require("../../core/db/trainer.bank");
const { trainerModel } = require("../../core/db/trainer.schema");

const { handleError } = require("../../core/utils");
const {
  create_trainer_bank_model,
  switch_active_bank_model,
  single_trainer_bank_model,
  all_trainer_bank_model,
} = require("../model/bank");

const createtrainerBankController = async (req, res, next) => {
  const {
    traineeId,
    accountName,
    accountNumber,
    SB_code,
    accountNickname,
    trainerId,
  } = req.body;
  try {
    //checking if user exist already
    const bank = await trainer_Banks.findOne({
      traineeId: traineeId,
      accountNickname: accountNickname,
    });
    if (bank) {
      //saving to the log
      const userID = traineeId;
      // const trainerId = bank.affliateId;
      const eventId = 7;
      const eventname = "bankregistration";
      const log_description = `bank account with that nickname already exist  `;
      const logged_data = {
        userID,
        log_description,
        eventname,
        eventId,
        trainerId,
      };
      const log_login = log_trainer_model_failed(logged_data, res);
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
      trainerId,
    };

    let trainee = await create_trainer_bank_model(data, res);

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
  const { trainerId, bankId } = req.body;
  try {
    //checking if user exist already
    const bank = await trainer_Banks.findById({ _id: bankId });
    if (!bank) {
      //saving to the log
      const userID = "null";
      const affliateID = "null";
      const eventId = 8;
      const eventname = "activebank";
      const log_description = `bank account dont exist  `;
      const logged_data = {
        userID,
        log_description,
        eventname,
        eventId,
        trainerId,
      };
      const log_login = log_trainer_model_success(logged_data, res);
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
        trainerId,
      bankId,
    };

    let trainee = await switch_active_bank_model(data, res);
    //saving to the log
    const userID = bank.traineeId;
    // const affliateID = bank.affliateId;
    const eventId = 8;
    const eventname = "activebank";
    const log_description = `bank account now switched to active bank account  `;
    const logged_data = {
      userID,
      log_description,
      eventname,
      eventId,
      trainerId,
    };
    const log_login = log_trainer_model_success(logged_data, res);
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

const singletrainerBankController = async (req, res, next) => {
  const { bankId } = req.body;
  try {
    //checking if user exist already
    const client = await trainer_Banks.findById({ _id: bankId });
    if (!client) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainer  bank account dont exist",
        data: [],
        error: "trainer bank account dont exist",
      });
    }

    const data = {
      bankId,
    };

    let trainee = await single_trainer_bank_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer bank successfully retrieved",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const alltrainerBankController = async (req, res, next) => {
  const { trainerId } = req.body;
  try {
    //checking if user exist already
    const client = await trainerModel.findById({ _id: trainerId });
    if (!client) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainer  account dont exist",
        data: [],
        error: "trainer  account dont exist",
      });
    }

    const data = {
      trainerId,
    };

    let trainee = await all_trainer_bank_model(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "trainer banks successfully retrieved",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  createtrainerBankController,
  switchactiveBankController,
  singletrainerBankController,
  alltrainerBankController,
  
};
