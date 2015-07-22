var express = require('express');
var routes = require('./server/routes');

var app = express();

app.use(express.static('build'));

app.use('/', routes);

app.listen(3000, function(){
  console.log('listening')
})