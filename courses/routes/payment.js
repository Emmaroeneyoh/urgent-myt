const { makepaymentController } = require("../app/controller/payment.course");
const { user_check_token } = require("../core/athorisation");
const { paymentsessionValidation } = require("../core/payment.validation");



const router = require("express").Router();

//trainee handle
router.post(
  "/trainee/create/payment",
  user_check_token,
  paymentsessionValidation,
  makepaymentController
);

module.exports = router