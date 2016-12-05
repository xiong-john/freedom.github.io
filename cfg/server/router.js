var express = require('express');
var path = require('path');
var app = express();

app.use('/static', express.static('public'));

app.get('/main', function (req, res) {
  res.send('console.log("xiong")');
});