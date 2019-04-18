//get current date
//const dateStringNow = require("./date");
//const dateStringNow from "date";
const CronJob = require("cron").CronJob;

const dateNow = new Date();

console.log("Initiating the cronjob ... every 2mins \n" + dateNow);
const job = new CronJob("*/2 * * * *", function() {
  const d = new Date();
  console.log("cronjob triggered:", d);
  const jsonFetcher = require("./jsonFetcher");
  let jsonDowload = jsonFetcher.jsonFetch();
  return jsonDowload;
});
//console.log("Data ready... Syncing started at " + d);
job.start();
