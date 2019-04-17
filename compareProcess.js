const fs = require("fs");

//what is the last file?
var files = fs.readdirSync("./json");
var filesSorted = files.sort();
var lastFile = filesSorted[filesSorted.length - 1];
var preLastFile = filesSorted[filesSorted.length - 2];
console.log(lastFile, preLastFile);

//is equal with last file don't continue or do anything

//is not equal get the difference

//get difference from the latest file

//require("./date");

// var content;
// // First I want to read the file
// fs.readFile("./json/dsales2019-4-17_1254.json", function(err, data) {
//   if (err) {
//     throw err;
//   }
//   content = JSON.parse(data);

//   // Invoke the next step here however you like
//   //console.log(content); // Put all of the code here (not the best solution)
//   processFile(); // Or put the next step in a function and invoke it
// });

// function processFile() {
//   console.log(content);
// }

//compare two json files
var path1 = "./json/dsales2019-4-17_1254.json";
var path2 = "./json/dsales2019-4-17_1255.json";

fs.readFile(path1, "utf8", function(err, contents) {
  return contents;
  // console.log(Object.keys(contents).length);
});

const second = fs.readFile(path2, "utf8", function(err, contents) {
  return Object.keys(contents).length;
  //console.log(Object.keys(contents).length);
});

// var obj1 = first;
// var obj2 = second;

// var flag = true; //

// console.log(Object.keys(obj1).length);
// console.log(Object.keys(obj2).length);

// if (Object.keys(obj1).length == Object.keys(obj2).length) {
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

// var path1 = "./json/dsales2019-4-17_1254.json";
// var path2 = "./json/dsales2019-4-17_1255.json";
