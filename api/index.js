const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json({limit: "50mb", type:'application/json'}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:5000000,type:'application/x-www-form-urlencoded'}));

export default {
    path: '/api',
    handler: app
  }