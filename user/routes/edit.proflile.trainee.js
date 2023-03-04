const {
  updateUserNameController,
  updateEmailController,
  updatePhoneController,
  updatesocialController,
  updatelocationController,
  updatepasswordController,
  updateimageController,
} = require("../app/controller/editProfile.controller");
const { userprofileController } = require("../app/controller/profile");
const { user_check_token } = require("../core/auhorization");
const {
  editTraineeNameValidation,
  editTraineeEmailValidation,
  editTraineePhoneValidation,
  editTraineelocationValidation,
  editTraineeSocialValidation, editTraineepasswordValidation, GetNotificationValidation, editTraineeimageValidation
} = require("../core/user.validation");

const router = require("express").Router();

router.post(
  "/trainee/profile/name",
  user_check_token,
  editTraineeNameValidation,
  updateUserNameController
);
router.post(
  "/trainee/profile/email",
  user_check_token,
  editTraineeEmailValidation,
  updateEmailController
);

router.post(
  "/trainee/profile/phone",
  user_check_token,
  editTraineePhoneValidation,
  updatePhoneController
);
router.post(
  "/trainee/profile/social",
  user_check_token,
  editTraineeSocialValidation,
  updatesocialController
);
router.post(
  "/trainee/profile/location",
  user_check_token,
  editTraineelocationValidation,
  updatelocationController
);
router.post(
  "/trainee/profile/image",
  user_check_token,
  editTraineeimageValidation,
  updateimageController
);

router.post(
  "/trainee/profile/password",
  user_check_token,
  editTraineepasswordValidation,
  updatepasswordController
);


router.post(
  "/trainee/profile",
  user_check_token,
 GetNotificationValidation,
  userprofileController
);

module.exports = router;
