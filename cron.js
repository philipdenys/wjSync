const CronJob = require("cron").CronJob;

const myModule = require("./date");
let dateNow = myModule.dateNow();

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
