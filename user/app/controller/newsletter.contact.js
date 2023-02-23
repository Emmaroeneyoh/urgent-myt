const { newsletterschema } = require("../../core/db/newsletter.schema");
const { notificationschema } = require("../../core/db/notify.schema");
const { userModel } = require("../../core/db/user.schema");
const { handleError } = require("../../core/utils");
const {
  contactUsModel,
  newsletterModel,
  notificationModel,
  GetnotificationModel,
  DeletenotificationModel,
} = require("../model/newsletter.contact");

const contactUsController = async (req, res, next) => {
  const { firstname, lastname, phone, email, message } = req.body;
  try {
    const data = {
      firstname,
      lastname,
      phone,
      email,
      message,
    };

    let contact = await contactUsModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const newsletterController = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = email.toLowerCase();
  try {
    const client = await newsletterschema.findOne({ email: userEmail });
    if (client) {
      return res.status(200).json({
        status_code: 200,
        status: false,
        message: "email already subscribed",

        error: "email already subscribed",
      });
    }
    const data = {
      userEmail,
    };

    let contact = await newsletterModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "Email have been subscribed successfully",
      data: contact,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const notificationController = async (req, res, next) => {
  const { notification, traineeId } = req.body;
  try {
    const user = await userModel.findOne({ _id: traineeId });
    if (!user) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainee dont exist",

        error: "trainee dont exist",
      });
    }
    const data = {
      notification,
      traineeId,
    };

    let contact = await notificationModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "notification successfully uploaded",
      data: contact,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const GetnotificationController = async (req, res, next) => {
  const { traineeId } = req.body;
  try {
    const user = await userModel.findOne({ _id: traineeId  });
    if (!user) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainee dont exist",

        error: "trainee dont exist",
      });
    }
    const data = {
      traineeId,
    };

    let contact = await GetnotificationModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "notification successfully retrieved",
      data: contact,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const DeletenotificationController = async (req, res, next) => {
  const { notificationId ,  traineeId } = req.body;
  try {
    const user = await userModel.findOne({_id: traineeId  });
    if (!user) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "trainee dont exist",

        error: "trainee dont exist",
      });
    }
    const data = {
      notificationId,
    };

    let contact = await DeletenotificationModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "notification successfully deleted",
      data: contact,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  contactUsController,
  newsletterController,
  notificationController,
  GetnotificationController,
  DeletenotificationController,
};
