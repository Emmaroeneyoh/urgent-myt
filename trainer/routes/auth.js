
const { createtrainer_affliateController } = require("../app/controller/auth");
const { user_check_token } = require("../core/authorization");
const { trainerSignupValidation } = require("../core/trainer.validation");

const router = require("express").Router();

router.post(
  "/trainer/signup",
  user_check_token,
  trainerSignupValidation,
  createtrainer_affliateController
);

module.exports = router;
