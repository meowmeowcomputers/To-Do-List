
var express = require('express');
var app = express();
var body_parser = require('body-parser');
var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

app.use(body_parser.urlencoded({extended: false}));

app.get('/', function (request, response) {
  response.send('A E S T H E T I C');
});

app.listen(8002, function () {
  console.log('Listening on port 8002');
});

app.get('/form', function(request, response) {
  response.render('form.hbs', {title:'form'});
});
app.post('/submit', function (request, response) {
  console.log(request.body);
  console.log(request.body.name)
  var x = request.body.name
  response.send(`${x}`);
});
