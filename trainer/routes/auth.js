
const { createtrainer_affliateController } = require("../app/controller/auth");
const { singletrainerController } = require("../app/controller/retreive.trainer");
const { user_check_token } = require("../core/authorization");
const { singletrainerprofileValidation } = require("../core/trainer.profile");
const { trainerSignupValidation } = require("../core/trainer.validation");

const router = require("express").Router();

router.post(
  "/trainer/signup",
  user_check_token,
  trainerSignupValidation,
  createtrainer_affliateController
);

router.post(
  "/trainer/profile",
  user_check_token,
singletrainerprofileValidation,
  singletrainerController  
);

module.exports = router;
