// Introduce the required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application, use localhost for setup, later heroku will use process.env.port
var app = express();
var PORT = process.env.PORT || 8080;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));
