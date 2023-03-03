const { createtrainersessionController, createtrainersession1Controller, createtrainersession2Controller, createtrainersession4Controller, createtrainersession5Controller, createtrainersession3Controller } = require("../app/controller/session");
const { user_check_token } = require("../core/authorization");
const { trainercreatesessionValidation, trainercreatesession1Validation, trainercreatesession2Validation, trainercreatesession4Validation, trainercreatesession5Validation, trainercreatesession3Validation } = require("../core/trainer.session.validation");




const router = require("express").Router();

router.post(
  "/trainer/create/session",
  user_check_token,
  trainercreatesessionValidation,
  createtrainersessionController
);

router.post(
  "/trainer/update/session1",
  user_check_token,
  trainercreatesession1Validation,
  createtrainersession1Controller
);

router.post(
  "/trainer/update/session2",
  user_check_token,
  trainercreatesession2Validation,
  createtrainersession2Controller
);

router.post(
  "/trainer/update/session4",
  user_check_token,
  trainercreatesession4Validation,
  createtrainersession4Controller
);
router.post(
  "/trainer/update/session5",
  user_check_token,
  trainercreatesession5Validation,
  createtrainersession5Controller
);
router.post(
  "/trainer/update/session3",  
  
  user_check_token,
  trainercreatesession3Validation,
  createtrainersession3Controller
);

module.exports = router