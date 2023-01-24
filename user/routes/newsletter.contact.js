const { contactUsController } = require('../app/controller/newsletter.contact.js')
const { contactUsValidation } = require('../core/validation')


const router = require('express').Router()

router.post('/contactus' ,  contactUsValidation , contactUsController)


module.exports = router