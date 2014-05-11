var express = require('express');
var path = require('path');
var connect = require('connect');

/*
 * Initialise express
 */
var app = express();
app.use(connect.urlencoded());

/*
 * Serve static content from /public
 */
app.use(express.static(path.join(__dirname, '/public')));

/*
 * Handle POST requests to "/form"
 */
app.post('/form', function(req, res) {
	res.end('Hello ' + req.body.str);
});

/* 
 * Start listening for a HTTP Request
 */
app.listen(process.argv[2]);

