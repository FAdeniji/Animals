var express = require('express');
var app = express();
var db = require('./db');

var AnimalController = require('./animal/AnimalController');
app.use('/api/animals', AnimalController);

module.exports = app;
