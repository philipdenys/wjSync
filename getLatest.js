var fs = require("fs");

var path1 = "./json/dsales2019-4-17_1254.json";
var path2 = "./json/dsales2019-4-17_1255.json";

// console.log(Object.keys(obj1).length);
// console.log(Object.keys(obj2).length);

const first = fs.readFile(path1, "utf8", function(err, contents) {
  //return contents;
  console.log(Object.keys(contents).length);
});

const second = fs.readFile(path2, "utf8", function(err, contents) {
  //return contents;
  console.log(Object.keys(contents).length);
});
console.log("loaded");
