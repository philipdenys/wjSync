module.exports = {
  jsonFetch: function() {
    const fetch = require("node-fetch");
    var fs = require("fs");

    const myModule = require("./date");
    let dateNow = myModule.dateNow();
    // Watch-Jewel.com costumer id
    var wjId = "cd788eb9-3b41-4163-9f9d-49d6c588241a";
    //outside
    var baseUrl = "http://192.168.0.10:8099/services/api/integrations/";

    var pricelist = "complete-customer-pricelist/";
    var pricelistStatus = "complete-customer-pricelist-status/";

    var dsalesUrlStatus = baseUrl + pricelistStatus + wjId; //json price stock
    var dsalesUrl = baseUrl + pricelist + wjId; //json with "full" specs

    fetch(dsalesUrlStatus)
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        console.log("downloading the json file...");
        response.json().then(function(data) {
          var data = JSON.stringify(data);

          var fileName = "dsales" + dateNow; //date.js
          const path = `${__dirname}/json/${fileName}.json`; //if is dsalesUrlStatus then add string in filename

          fs.writeFile(path, data, err => {
            if (err) console.log(err);
            console.log("file ok ...");
          });
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }
};
