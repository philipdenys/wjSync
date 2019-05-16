const fs = require("fs");

//what are the last 2 files?
var files = fs.readdirSync("./json");
var filesSorted = files.sort();
var lastFile = filesSorted[filesSorted.length - 1];

//

console.log(lastFile);
