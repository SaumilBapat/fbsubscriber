var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Started on port " + port);
});

app.get('/', function (req, res) {
  res.send('hello world')
});
