const { signupUserController, loginUserController, sendUserNewPasswordLink, resetUserPassword } = require('../app/controller/auth')
const { userSignupValidation, userLoginValidation, userforgotpasswordValidation, userResetpasswordValidation } = require('../core/validation')

const router = require('express').Router()

router.post('/signup' , userSignupValidation , signupUserController)
router.post('/login' ,  userLoginValidation, loginUserController)
router.post('/forgot-password' , userforgotpasswordValidation, sendUserNewPasswordLink)
router.post('/reset-password' , userResetpasswordValidation , resetUserPassword)
router.get('/test', (req , res) => {
    res.json('app is workin')
})

module.exports = router