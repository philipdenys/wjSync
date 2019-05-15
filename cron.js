// server is on cloudways
// CI is travis


var express = require('express');
const CronJob = require("cron").CronJob;

const myModule = require("./date");
let dateNow = myModule.dateNow();

// App definition
var app = express();

var portNum = 3000;
app.listen(3000, function () {
  console.log('Making some pancakes on port:', portNum);
});

console.log(dateNow + ": Initiating the cronjob ... every day at 23:00");
const job = new CronJob("0 23 * * *", function () {
  // everyday at 23:00
  const d = new Date();
  console.log("cronjob triggered:", d);

  // get json
  const jsonFetcher = require("./jsonFetcher");
  let jsonDowload = jsonFetcher.jsonFetch();
  return jsonDowload;
});

job.start();
