const express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

const cors = require("cors")

const port = 3000; //default is 3000
  

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password123',
    database: 'is4302'
});
 
// connect to database
mc.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var routes = require("./app/controller/appController"); //importing route
routes(app); //register the route

app.listen(port);

console.log('API server started on: ' + port);

