var fs = require('fs');

var filename = process.argv[2];

var myCallback = function (err, data) {
	var lines = data.toString().split('\n');
	console.log(lines.length + ' lines in ' + filename);
}

var buffer = fs.readFile(filename, myCallback);


