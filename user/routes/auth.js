const { signupUserController, loginUserController, sendUserNewPasswordLink, resetUserPassword } = require('../app/controller/auth')
const { userSignupValidation, userLoginValidation, userforgotpasswordValidation, userResetpasswordValidation } = require('../core/validation')

const router = require('express').Router()

router.post('/trainee/signup' , userSignupValidation , signupUserController)
router.post('/trainee/login' ,  userLoginValidation, loginUserController)
router.post('/trainee/forgot-password' , userforgotpasswordValidation, sendUserNewPasswordLink)
router.post('/trainee/reset-password' , userResetpasswordValidation , resetUserPassword)
router.get('/trainee/test', (req , res) => {
    res.json('app is workin')
})

module.exports = router