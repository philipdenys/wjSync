var fs = require("fs"),
  path = require("path"),
  util = require("util");

var files = fs.readdirSync("./json");

console.log(files);
