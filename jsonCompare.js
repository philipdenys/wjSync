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

// var first = fs.readFile(path1, "utf8", function(err, contents) {
//   const first = [];
//   console.log(lastFile + " " + Object.keys(contents).length);
//   return first;
// });

// fs.readFile(path2, "utf8", function(err, contents) {
//   const second = [];
//   console.log(preLastFile + " " + Object.keys(contents).length);
//   return second;
// });
// setTimeout(function() {
//   console.log(typeof first);
//   //Object.keys(jsonDowload).length;
// }, 3000);

// /////////////////////////////////////////////////////////////

var content;
// First I want to read the file
fs.readFile("./json/dsales20190418_1711.json", function read(err, data) {
  if (err) {
    throw err;
  }
  content = data;

  // Invoke the next step here however you like
  console.log(content); // Put all of the code here (not the best solution)
  processFile(); // Or put the next step in a function and invoke it
});

function processFile() {
  console.log(content);
}

var obj1 = { name: "Sam", class: "MCA" };
var obj2 = { class: "MCA", name: "Sam" };

var flag = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
  for (key in obj1) {
    if (obj1[key] == obj2[key]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
} else {
  flag = false;
}
console.log("is object equal" + flag);
