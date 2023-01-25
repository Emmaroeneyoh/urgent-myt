const { contactUsController, newsletterController } = require('../app/controller/newsletter.contact.js')
const { contactUsValidation, newsletteremailValidation } = require('../core/validation')


const router = require('express').Router()

router.post('/contactus' ,  contactUsValidation , contactUsController)
router.post('/newsletter' ,  newsletteremailValidation, newsletterController)


module.exports = router