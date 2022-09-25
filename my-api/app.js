const express = require('express');
//Router Import
const router = require("./src/routes/api");
const app = new express();

//Security Middleware
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')


//Security Middleware Implement

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Request Rate Limiting

const limiter = rateLimit({
    windowMs: 15 * 60 * 100,// 15 Minutes
    max: 100 // Limit each IP to 100 requests per minutes

})

app.use(limiter)

//undefined Route
app.use("/api/v1", router)

app.use('*', (req, res) => {
    res.status(404).json({status: "Failed", data: "Not Found"});
})

//baseurl=api/v1/

//export
module.exports = app;



