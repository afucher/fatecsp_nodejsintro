var fs = require('fs');

var file = fs.readFile("package.json", function(err, data){
	console.log(data.toString());
});

console.log(file);