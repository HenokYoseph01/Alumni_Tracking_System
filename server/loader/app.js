//Require Express
const express = require('express');

//Require geh
const geh = require('../api/geh')

//Get routers
const alumniRouter = require('../api/alumni/router');
const adminRouter = require('../api/admin/router');
const headRouter = require('../api/head/router');

//Create app
const app = express();

//Add in the body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Use routers
app.use('/api/v1/alumni',alumniRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/head', headRouter);

//Use global error handler
app.use(geh)

module.exports = app;