const CronJob = require("cron").CronJob;

const myModule = require("./date");
let dateNow = myModule.dateNow();

console.log("Initiating the cronjob ... every 2mins \n" + dateNow);
const job = new CronJob("0 23 * * *", function() {
  // everyday at 23:00
  const d = new Date();
  console.log("cronjob triggered:", d);

  const jsonFetcher = require("./jsonFetcher");
  let jsonDowload = jsonFetcher.jsonFetch();
  return jsonDowload;
});

job.start();
