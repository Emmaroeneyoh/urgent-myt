const { markattendanceController } = require("../app/controller/appointment");
const { mark_attendance_model } = require("../app/model/appointment");
const { trainermarkattendanceValidation } = require("../core/appointment.validation");
const { user_check_token } = require("../core/authorization");


const router = require("express").Router();

router.post(
    "/trainer/mark/attendance",
    user_check_token,
    trainermarkattendanceValidation,
    markattendanceController
);
  
module.exports = router
  