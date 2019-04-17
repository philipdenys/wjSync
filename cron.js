//“At 22:00 on every day-of-week from Monday through Friday.”

var CronJob = require('cron').CronJob;

new CronJob('*/15 * * * * ', function() {
  console.log('You will see this message every 15 minute');
  require('./index');
}, null, true, 'America/Los_Angeles');


// var CronJob = require('cron').CronJob;
// new CronJob('* * * * *', function() {
//   console.log('You will see this message every minute');
//   require('./index');
// }, null, true, 'America/Los_Angeles');

// var CronJob = require('cron').CronJob;
// new CronJob('* * * * * *', function() {
//   console.log('You will see this message every second');
// }, null, true, 'America/Los_Angeles');