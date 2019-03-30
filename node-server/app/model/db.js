//create connection to db (stored on a single file) so that it can be reuse by other modules

'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password123',
    database : 'is4302'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;