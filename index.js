var express = require('express')
var app = express()

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //localhost means using databases on our local machine
  user     : 'root',
  password : '<put your password here>',
  database : '<put name of database here>'
});

connection.connect();

//This should return every row/record from the 'student' table in the 'practice' database.
connection.query('SELECT * from student', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();

//GET: localhost:xxxx/
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//type in 'node index.js' on command line from project's root directory
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
