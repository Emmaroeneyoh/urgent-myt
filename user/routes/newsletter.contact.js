const { contactUsController, newsletterController, notificationController, GetnotificationController, DeletenotificationController } = require('../app/controller/newsletter.contact.js')
const { user_check_token } = require('../core/auhorization.js')
const { contactUsValidation, newsletteremailValidation  , TraineeNotificationValidation, GetNotificationValidation, deleteNotificationValidation } = require('../core/user.validation')


const router = require('express').Router()

router.post('/contactus' ,  contactUsValidation , contactUsController)
router.post('/newsletter' ,  newsletteremailValidation, newsletterController)
router.post('/notification' , user_check_token, TraineeNotificationValidation , notificationController)
router.post('/trainee/notification' ,user_check_token,   GetNotificationValidation, GetnotificationController)
router.delete('/trainee/notification' , user_check_token, deleteNotificationValidation, DeletenotificationController)
    
module.exports = router