//require express
const express = require('express');

//Router
const router = express.Router();

//Protect
const protect = require('../protect')

//File uploader
const fileUploader = require('../../utils/fileUploader')

//Allowed File type
const allowedFileType = require('../../utils/allowedFileType')

//Controllers
const alumniController = require('./controller');

// Alumni routes
router.post("/register",protect,allowedFileType('png','jpeg','jpg')
            ,fileUploader.single('avatar'),alumniController.register,alumniController.uploadPhoto);
router.post("/login",alumniController.login);
router.post('/test',alumniController.test)
//Export router
module.exports = router