const { updateUserNameController } = require('../app/controller/editProfile.controller')
const { user_check_token } = require('../core/auhorization')
const { editTraineeNameValidation } = require('../core/validation')



const router = require('express').Router()

router.post('/trainee/profile/name' , user_check_token, editTraineeNameValidation , updateUserNameController)


module.exports = router