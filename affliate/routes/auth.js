const { createAffliateController, singleAffliateController } = require("../app/controller/auth");
const { send_affliate_link_to_trainer_controller } = require("../app/controller/email");
const {
  affliateSignupValidation,
  affliateSendpromocodeValidation,
  singleaffliateValidation,
} = require("../core/affliate.validation");
const { user_check_token } = require("../core/authorization");

const router = require("express").Router();

router.post(
  "/affliate/signup",
  user_check_token,
  affliateSignupValidation,
  createAffliateController
);
router.post(
  "/affliate/send/promocode",
  user_check_token,
  affliateSendpromocodeValidation,
  send_affliate_link_to_trainer_controller
);
router.post(
  "/affliate/profile",
  user_check_token,
  singleaffliateValidation,
 singleAffliateController
);

module.exports = router;
