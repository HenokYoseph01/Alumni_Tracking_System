//require express
const express = require('express');

//Router
const router = express.Router();

//Admin Controllers
const adminController = require('./controller');

//File Uploader
const fileUploader = require('../../utils/fileUploader')
const allowedFileType = require('../../utils/allowedFileType')

router.route('/alumniaccount').post(allowedFileType('xlsx','xls','xml'),fileUploader.single('list'),adminController.createAlumniAccount);
router.route('/headaccount').post(adminController.createHeadAccount)
module.exports = router;