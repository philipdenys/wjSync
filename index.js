
const fetch = require('node-fetch');
var fs = require("fs");



let dsalesUrl = 'http://192.168.0.10:8099/services/api/integrations/complete-customer-pricelist-status/cd788eb9-3b41-4163-9f9d-49d6c588241a';

fetch(dsalesUrl)
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            //return response.blob();
            // Examine the text in the response
            response.json().then(function (data) {
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
                var dateString = year + "-" + (+ month + 1) + "-" + date + "-" + hour + "-" + minutes;
                var fileName = "dsales" + dateString;
                const path = `${__dirname}/json/${fileName}.json`;
                // console.log(fileName);

                // json write to file
                //var data = fetch(dsalesUrl); //comes as a promise

                fs.writeFile(path, data, (err) => {
                    if (err) console.log(err);
                    console.log("Successfully Written to File on Server");
                });
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });



 //read files
//  fs.readFile("README.md", function(err, buf) {
//     console.log(buf.toString());
//   });

//output json file  
//get length
//
//console.log(fetch(dsalesUrl));
//document.getElementById("root").innerHTML = console.log(fetch(dsalesUrl));

// fetch('http://192.168.0.10:8099/services/api/integrations/complete-customer-pricelist-status/cd788eb9-3b41-4163-9f9d-49d6c588241a')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });