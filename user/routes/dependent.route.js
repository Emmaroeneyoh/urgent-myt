const { createDependentController } = require('../app/controller/dependent.controller')
const { user_check_token } = require('../core/auhorization')
const { createdependentValidation } = require('../core/dependent.validation')

const router = require('express').Router()

router.post('/trainee/create/dependent' , user_check_token, createdependentValidation , createDependentController)


module.exports = router