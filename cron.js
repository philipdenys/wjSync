//get current date
//const dateStringNow = require("./date");
//const dateStringNow from "date";
const CronJob = require("cron").CronJob;
const dateNow = new Date();

console.log("Initiating the cronjob ... every 2mins" + dateNow);
const job = new CronJob("*/2 * * * *", function() {
  const d = new Date();
  console.log("cron triggered:", d);
  return require("./index"); //does this work?
});
//console.log("Data ready... Syncing started at " + d);
job.start();

//“At 22:00 on every day-of-week from Monday through Friday.”

// var CronJob = require('cron').CronJob;

// new CronJob('*/15 * * * * ', function() {
//   console.log('You will see this message every 15 minutes');
//   require('./index');
// }, null, true, 'America/Los_Angeles');

// * * * * * You will see this message every minute
//* * * * * * every second
