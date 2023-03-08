//require express
const express = require('express');

//Router
const router = express.Router();

//Protect
const protect = require('../protect')

//Controllers
const headController = require('./controller');

//Routers
router.post('/login',headController.login)

//Export router
module.exports = router