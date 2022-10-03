const express = require('express'); 
const bodyParser = require('body-parser'); 
const { randomBytes } = require('crypto'); 

const app = express(); 
app.use(bodyParser.json()); 