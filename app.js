
var express = require('express');
var app = express();
var body_parser = require('body-parser');
var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});
var db = pgp({database:'todo'
  //
  });

app.use(body_parser.urlencoded({extended: false}));

app.get('/', function (request, response) {
  response.send('A E S T H E T I C');
});

app.listen(8002, function () {
  console.log('Listening on port 8002');
});

app.get('/form', function(request, response) {


  db.query('SELECT * FROM task')
  .then(function (dbresults) {
    response.render('form.hbs', {title:'form', dbresults: dbresults});
    })
    // return dbresults;
  // .then(function (content){
  //
  // })
});
app.post('/submit1', function (request, response) {

  console.log(request.body);
  console.log(request.body.desc)
  var x = request.body.desc


  response.send(`${x}`);

});
