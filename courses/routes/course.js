const { createcourseController } = require("../app/controller/create.course");
const { retrieve_category_controller } = require("../app/controller/retrieve.category");
const { createcourseValidation } = require("../core/validation");

const router = require("express").Router();

router.post(
  "/create/course",
//   user_check_token,
  createcourseValidation,
  createcourseController
);

router.post(
  "/retrieve/course",
//   user_check_token,
  retrieve_category_controller
);

module.exports = router