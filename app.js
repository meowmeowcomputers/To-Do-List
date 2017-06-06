
var express = require('express');
var app = express();
var body_parser = require('body-parser');
var db = require('pg-promise')



app.use(body_parser.urlencoded({extended: false}));

app.get('/', function (request, response) {
  response.send('A E S T H E T I C');
});

app.listen(8002, function () {
  console.log('Listening on port 8002');
});
