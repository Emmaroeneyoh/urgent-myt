const express = require("express");
//using the env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const { coonectdb } = require('./helper/connectdb')
const cors = require('cors')
const app = express();
const { PORT } = require("./helper/utils");

//connecting the database
coonectdb()

//getting all routes related to user/trainee
const userRoute = require('./user/routes/auth')
const dependentRoute = require('./user/routes/dependent.route')
const newsletter_contactus_Route = require('./user/routes/newsletter.contact')
const edit_profile  = require('./user/routes/edit.proflile.trainee')
const edit_dependent = require('./user/routes/edit.dependent')
const traineeAppointment = require('./user/routes/appointment')

//getting all route for affliate
const affliateRoute  = require('./affliate/routes/auth')
const affliateRouteBank = require('./affliate/routes/bank')

//getting all routes for trainer 
const trainerRoute = require('./trainer/routes/auth')
const trainerRouteProfile = require('./trainer/routes/profile')
const trainerRouteEditProfile = require('./trainer/routes/edit.profile')
const trainerRouteBank = require('./trainer/routes/bank')
const trainersession = require('./trainer/routes/session')
const trainerappointment = require('./trainer/routes/attendance')


//getting all routes for course
const courseroute = require('./courses/routes/course')
const paymentroute = require('./courses/routes/payment')




app.use(cors())
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using all user/trainee middleware route 
app.use(userRoute)
app.use(dependentRoute)
app.use(newsletter_contactus_Route)
app.use(edit_profile)
app.use(edit_dependent)
app.use(traineeAppointment)


//using all affliate middleware route 
app.use(affliateRoute)
app.use(affliateRouteBank)

//using all trainer middleware route
app.use(trainerRoute)
app.use(trainerRouteProfile)
app.use(trainerRouteEditProfile)
app.use(trainerRouteBank)
app.use(trainersession)
app.use(trainerappointment)

//using all cousre middleware route
app.use(courseroute)
app.use(paymentroute)


//error handler
app.use((req, res, next) => {
    const error = new Error(' api not found')
    error.status = 404
    res.status(404).json({
        status_code: 404,
        status: false,
        message:error.message,
        data: [],
        error: error.message,
      });
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    // res.json({
    //     error: {
    //         message : error.message
    //     }
    // })
   res.status(500).json({
        status_code: 500,
        status: false,
        message:error.message,
        data: [],
        error: error.message,
      });
})

const port = PORT || 3000
app.listen(port, () => {
    console.log('server connected' , port)
})