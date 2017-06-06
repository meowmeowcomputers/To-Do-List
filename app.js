
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
//
// app.get('/about', function (request, response) {
//   response.send('About Me');
// });
// app.get('/projects', function (request, response) {
//   response.send('Projects');
// });
// //URL Parameters
// app.get('/post/:slug', function (request, response) {
//   var slug = request.params.slug;
//   response.send('Post About: ' + slug);
// });
// //Greet exercise
// app.get('/greet', function (request, response) {
//   var name = request.query.name || "World";
//   response.send('Hello, '+name);
// });
//
// //Query Parameters: Tell the year you were born exercise
// app.get('/year', function (request, response) {
//   var age = request.query.age;
//   age = 2017-age || 'INFINITY';
//   response.send('You were born in '+age);
// });
//
// //GET Parameters
// // app.get('/hello', function (request, response) {
// //   var name = request.query.name || "World";
// //   response.send('Hello '+name);
// // });
//
// //Static Files
//
// //Templates
// app.get('/hello', function (request, response) {
//   var name = request.query.name || 'World';
//   var context = {title: 'Hello', name: name};
//   response.render('hello.hbs', context);
// });
// //Forms
// app.get('/form', function(request, response) {
//   response.render('form.hbs', {title:'form'});
// });
//
// app.get('/thanks', function(request, response) {
//   response.render('thanks.hbs', {title: 'Thanks!'});
// });
//
// app.post('/submit', function (request, response) {
//   console.log(request.body);
//   response.send('OK');
// });
// //Search
//
// app.get('/search', function (request, response) {
//   let term = request.query.searchTerm;
//   let query = "SELECT * FROM restaurant WHERE \
//   restaurant.name ILIKE '%$1#%'";
//   db.any(query, term)
//     .then(function (result) {
//       response.render('search.hbs', {results: results})
//     })
//     .catch(next);
// });
