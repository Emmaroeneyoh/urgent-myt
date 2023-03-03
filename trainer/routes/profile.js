
const { updatetrainerprofile1Controller, updatetrainerprofile2Controller, updatetrainerprofile3Controller, updatetrainerprofile4Controller, updatetrainerprofile5Controller } = require("../app/controller/profile");
const { user_check_token } = require("../core/authorization");
const { trainerprofile1Validation, trainerprofile2Validation, trainerprofile3Validation, trainerprofile4Validation, trainerprofile5Validation } = require("../core/trainer.profile");

const router = require("express").Router();

router.post(
  "/trainer/profile1",
  user_check_token,
  trainerprofile1Validation,
 updatetrainerprofile1Controller
);

router.post(
  "/trainer/profile2",
  user_check_token,
  trainerprofile2Validation,
 updatetrainerprofile2Controller
);

router.post(
  "/trainer/profile3",
  user_check_token,
  trainerprofile3Validation,
 updatetrainerprofile3Controller
);

router.post(
  "/trainer/profile4",
  user_check_token,
  trainerprofile4Validation,
 updatetrainerprofile4Controller
);

router.post(
  "/trainer/educationalbackground",
  user_check_token,
  trainerprofile5Validation,
 updatetrainerprofile5Controller
);

module.exports = router;
