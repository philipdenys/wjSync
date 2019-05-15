// const fetch = require("node-fetch");
var fs = require("fs"),
  path = require("path"),
  util = require("util");

// fetchjsonurl
// // async function fetchJsonUrl() {
// //   console.log("Loading data...");
// //   let url =
// //     "http://192.168.0.10:8099/services/api/integrations/complete-customer-pricelist-status/cd788eb9-3b41-4163-9f9d-49d6c588241a";

// //   let data = await (await fetch(url)).json();

// //   console.log("data loaded");
// //   return data;
// // }
// // fetchJsonUrl();

// var content;
// console.log(content);
// fs.readFile(
//   path.join(__dirname, "json", "dsales20190418_1711.json"),
//   "utf8",
//   function(err, data) {
//     if (err) {
//       console.log(err);
//       process.exit(1);
//     }
//   }
// );

var files = fs.readdirSync("./json");
// document.getElementById("jsonContent").innerHTML = files; // this doesn't go in clientside js
console.log(files);
