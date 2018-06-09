console.log("Starting Server");
const express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.status(200).send('App First Page');
});
