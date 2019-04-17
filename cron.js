//get current date
//const dateStringNow = require("./date");
//const dateStringNow from "date";
const CronJob = require("cron").CronJob;
const fetch = require("node-fetch");
var fs = require("fs");

const dateNow = new Date();

console.log("Initiating the cronjob ... every 2mins \n" + dateNow);
const job = new CronJob("*/2 * * * *", function() {
  const d = new Date();
  console.log("cronjob triggered:", d);
  let dsalesUrl =
    "http://192.168.0.10:8099/services/api/integrations/complete-customer-pricelist-status/cd788eb9-3b41-4163-9f9d-49d6c588241a";

  fetch(dsalesUrl)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      //return response.blob();
      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        //console.log(data.length);
        //document.getElementById("root").innerHTML = JSON.stringify(data);
        var data = JSON.stringify(data);

        // date formation
        var currentDate = new Date();
        var date = currentDate.getDate();
        var month = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year = currentDate.getFullYear();
        var hour = currentDate.getHours();
        var minutes = currentDate.getMinutes();

        // contructing fileName
        var dateString = `${year}-${month + 1}-${date}_${hour}${minutes}`;
        var fileName = "dsales" + dateString;
        const path = `${__dirname}/json/${fileName}.json`;
        // console.log(fileName);

        // json write to file
        //var data = fetch(dsalesUrl); //comes as a promise

        fs.writeFile(path, data, err => {
          if (err) console.log(err);
          console.log("Successfully Written File to the  Server");
        });
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
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
