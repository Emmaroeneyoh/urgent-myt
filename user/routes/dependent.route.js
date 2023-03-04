const {
  createDependentController, singleDependentController, allDependentController, deleteDependentController,
} = require("../app/controller/dependent.controller");
const { user_check_token } = require("../core/auhorization");
const {
  createdependentValidation,
  singledependentValidation,
  alldependentValidation,
  deletedependentValidation,
} = require("../core/dependent.validation");

const router = require("express").Router();

router.post(
  "/trainee/create/dependent",
  user_check_token,
  createdependentValidation,
  createDependentController
);
router.post(
  "/trainee/single/dependent",
  user_check_token,
  singledependentValidation,
 singleDependentController
);
router.post(
  "/trainee/all/dependent",
  user_check_token,
  alldependentValidation,
  allDependentController
);
router.delete(
  "/trainee/delete/dependent",
  user_check_token,
  deletedependentValidation,
  deleteDependentController
);

module.exports = router;
