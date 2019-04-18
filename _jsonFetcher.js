const fetch = require("node-fetch");
var fs = require("fs");

const myModule = require("./date");
let dateNow = myModule.dateNow(); // val is "Hello"

//"http://192.168.0.10:8099/services/api/integrations/complete-customer-pricelist-status/cd788eb9-3b41-4163-9f9d-49d6c588241a";

// Watch-Jewel.com costumer id
var wjId = "cd788eb9-3b41-4163-9f9d-49d6c588241a";
//outside
var baseUrl = "http://192.168.0.10:8099/services/api/integrations/";

var pricelist = "complete-customer-pricelist/";
var pricelistStatus = "complete-customer-pricelist-status/";

//var dsalesUrlStatus = baseUrl + pricelistStatus + wjId; //json price stock
var dsalesUrl = baseUrl + pricelist + wjId; //json with full specs

//console.log(dateNow);

//console.log(dsalesUrlStatus);

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
