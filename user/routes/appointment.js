const {
  singletrainerController,
} = require("../../trainer/app/controller/retreive.trainer");
const {
  filteredtrainersessionController, singletrainersessionController, trainersessionsController,
} = require("../../trainer/app/controller/session");
const {
  filteredtrainersessionValidation, singletrainersessionValidation, trainersessionsValidation,
} = require("../../trainer/core/trainer.session.validation");
const {
  traineeAllapointmentController,
  traineeAllfilteredapointmentController,
  traineesingleapointmentController,
} = require("../app/controller/appointment");
const {
  single_trainee_appointment_model,
} = require("../app/model/appointment");
const {
  alltraineeappointmentValidation,
  alltraineefilteredappointmentValidation,
  singletraineeappointmentValidation,
  singletrainerValidation,
} = require("../core/appointment.validation");
const { user_check_token } = require("../core/auhorization");

const router = require("express").Router();

router.post(
  "/trainee/all/appointment",
  alltraineeappointmentValidation,
  traineeAllapointmentController
);

router.post(
  "/trainee/filtered/appointment",
  alltraineefilteredappointmentValidation,
  traineeAllfilteredapointmentController
);

router.post(
  "/trainee/single/appointment",
  singletraineeappointmentValidation,
  traineesingleapointmentController
);

//to retrieve a trainer profile
router.post(
  "/trainee/single/trainer",
  singletrainerValidation,
  singletrainerController
);

//to retreive trainer session
router.post(
  "/trainee/filter/session",
  user_check_token,
  filteredtrainersessionValidation,
  filteredtrainersessionController
);

router.post(
  "/trainee/single/session",
  user_check_token,
  singletrainersessionValidation,
  singletrainersessionController
);

router.post(
  "/trainee/trainer/sessions",
    user_check_token,
  trainersessionsValidation,
  trainersessionsController,
);

module.exports = router;
