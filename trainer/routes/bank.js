const { createtrainerBankController, singletrainerBankController, alltrainerBankController, switchactiveBankController } = require("../app/controller/banks");
const { user_check_token } = require("../core/authorization");
const { trainerbankcreationValidation, singletrainerBankValidation, alltrainerBankValidation, trainerSwitchactivebankValidation } = require("../core/trainer.validation");



const router = require("express").Router();

router.post(
  "/trainer/createbank",
  user_check_token,
  trainerbankcreationValidation,
  createtrainerBankController
);
router.post(
  "/trainer/singlebank",
  user_check_token,
  singletrainerBankValidation,
  singletrainerBankController
);
router.post(
  "/trainer/banks",
  user_check_token,
  alltrainerBankValidation,
  alltrainerBankController
);
router.post(
  "/trainer/active",
  user_check_token,
  switchactiveBankController,
trainerSwitchactivebankValidation
);



module.exports = router;
