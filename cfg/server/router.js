var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

app.use('/static', express.static('public'));

app.get('/main', function (req, res) {
  var params  = getParamFormUrl(req.url);
  res.send(params.cb + '(' + JSON.stringify({a:'xiong'}) + ')');
});

app.listen(3001, function() {
  console.log('let us get start !')
});

function getParamFormUrl(url) {
  let paramArr = url.split(/\?|&/);
  var result = {};
  // console.log(paramArr)
  paramArr.forEach(function (elem, index) {
      let arr = elem.split('=');
      if(arr[1]) {
        console.log(arr[1],'asfasdfasf')
        result[arr[0]] = arr[1];
      }
  });
   return result;
}