const { updatetrainerexperienceController, updatetrainerbioController, updatetrainerRoleController, updatetrainerbackgroundController, updatetrainerwork_experienceController, updateeducation_degreeController, updatetrainerskillController } = require("../app/controller/edit.profile");
const { user_check_token } = require("../core/authorization");
const { trainerexperienceValidation, trainerbioValidation, trainerRoleValidation, trainerbackgroundValidation, trainerwork_experienceValidation, trainereducation_degreeValidation, trainerskillValidation } = require("../core/edit.profile.validation");


const router = require("express").Router();

router.post(
  "/trainer/experience",
  user_check_token,
  trainerexperienceValidation,
 updatetrainerexperienceController
);

router.post(
  "/trainer/bio",
  user_check_token,
  trainerbioValidation,
 updatetrainerbioController
);

router.post(
  "/trainer/role",
  user_check_token,
  trainerRoleValidation,
 updatetrainerRoleController
);
router.post(
  "/trainer/educationbackground",
  user_check_token,
  trainerbackgroundValidation,
 updatetrainerbackgroundController
);
router.post(
  "/trainer/work_experience",
  user_check_token,
  trainerwork_experienceValidation,
 updatetrainerwork_experienceController
);
router.post(
  "/trainer/education_degree",
  user_check_token,
  trainereducation_degreeValidation,
 updateeducation_degreeController
);

router.post(
  "/trainer/skill",
  user_check_token,
  trainerskillValidation,
 updatetrainerskillController
);



module.exports = router;
