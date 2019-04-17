const fetch = require("node-fetch");

async function fetchJsonUrl() {
  console.log("Loading data...");
  let url =
    "http://192.168.0.10:8099/services/api/integrations/complete-customer-pricelist-status/cd788eb9-3b41-4163-9f9d-49d6c588241a";

  let data = await (await fetch(url)).json();

  console.log("data loaded");
  return data;
}
fetchJsonUrl();

var fs = require("fs"),
  path = require("path"),
  util = require("util");
var content;
console.log(content);
fs.readFile(path.join(__dirname, "json", "test.txt"), "utf8", function(
  err,
  data
) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  content = util.format(data, "test", "test", "test");
  console.log(content);
});

var files = fs.readdirSync("./json");

console.log(files);
