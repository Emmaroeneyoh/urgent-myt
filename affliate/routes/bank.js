const { createAffliateController } = require("../app/controller/auth");
const {
  createAffliateBankController,
  switchactiveBankController,
  singleAffliateBankController,
  allAffliateBankController,
} = require("../app/controller/bank");
const { all_affliate_bank_model } = require("../app/model/bank");
const {
  affliateSwitchactivebankValidation,
  singleaffliateBankValidation,
  allaffliateBankValidation,
  affliatebankcreationValidation,
} = require("../core/affliate.validation");
const { user_check_token, check_user_affliate } = require("../core/authorization");

const router = require("express").Router();

router.post(
  "/affliate/add/bank",
  user_check_token,
  check_user_affliate,
  affliatebankcreationValidation,
  createAffliateBankController
);

router.post(
  "/affliate/active/bank",
  user_check_token,
  check_user_affliate,
  affliateSwitchactivebankValidation,
  switchactiveBankController
);
router.post(
  "/affliate/single/bank",
  user_check_token,
  check_user_affliate,
  singleaffliateBankValidation,
  singleAffliateBankController
);

router.post(
  "/affliate/all/bank",
  user_check_token,
  check_user_affliate,
  allaffliateBankValidation,
  allAffliateBankController
);

module.exports = router;
