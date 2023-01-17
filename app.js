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


app.use(cors())
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using all user/trainee middleware route 
app.use(userRoute)


//error handler
app.use((req, res, next) => {
    const error = new Error(' api not found')
    error.status = 404
    next(error)
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