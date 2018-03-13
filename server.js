var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');

// Required for POST parameters
var bodyParser = require('body-parser');
var app = express();

// MIDDLEWARE
	// Allows access to static css
	app.use(express.static(__dirname + '/css'));
	// Allows access to static images
	app.use(express.static(__dirname + '/images'));
	// Allows access to static js
	app.use(express.static(__dirname + '/js'));
	
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Must be greater then express 4.8 for sendFile
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});
app.post('/', function(req, res) {

	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	
	res.send(username + email + password);
	// Ends the response process
	res.end("yes");
});
app.listen(8080, function () {
  console.log('App rendered at localhost:8080');
});

