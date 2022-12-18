const express = require('express');

const app = express();

app.get('/api',(req,res)=>{
    res.status(200).json({"users":["User One","User Two","User Three","EHGY"]})
});

module.exports = app;