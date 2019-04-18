const fs = require("fs");

//what is the last file?
var files = fs.readdirSync("./json");
var filesSorted = files.sort();
var lastFile = filesSorted[filesSorted.length - 1];
var preLastFile = filesSorted[filesSorted.length - 2];

//is equal with last file don't continue or do anything

//is not equal get the difference

//get difference from the latest file

//compare two json files
var path1 = "./json/" + lastFile;
var path2 = "./json/" + preLastFile;

//console.log(path1);

var first = fs.readFile(path1, "utf8", function(err, contents) {
  const first = [];
  console.log(lastFile + " " + Object.keys(contents).length);
  return first;
});

fs.readFile(path2, "utf8", function(err, contents) {
  const second = [];
  console.log(preLastFile + " " + Object.keys(contents).length);
  return second;
});
setTimeout(function() {
  console.log(typeof first);
  //Object.keys(jsonDowload).length;
}, 3000);

// var flag = true;

// if (obj1 == obj2) {
//   for (key in obj1) {
//     if (obj1[key] == obj2[key]) {
//       continue;
//     } else {
//       flag = false;
//       break;
//     }
//   }
// } else {
//   flag = false;
// }
// console.log("files are the same: " + flag);

// /////////////////////////////////////////////////////////////
