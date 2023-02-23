const { updateDependentNameController  } = require("../app/controller/edit.dependent");
const { user_check_token } = require("../core/auhorization");
const { editDependentValidation  } = require("../core/dependent.validation");

const router = require("express").Router();

router.post(
  "/dependent/profile",
  user_check_token,
  editDependentValidation,
 updateDependentNameController
);



module.exports = router