var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.listen(3000, () => {
    console.log("Started on port 3000");
});

app.get('/', function (req, res) {
  res.send('hello world')
});
