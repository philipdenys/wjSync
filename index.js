
const fetch = require('node-fetch');


let dsalesUrl = 'http://192.168.0.10:8099/services/api/integrations/complete-customer-pricelist-status/cd788eb9-3b41-4163-9f9d-49d6c588241a';

fetch(dsalesUrl)
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            // Examine the text in the response
            response.json().then(function (data) {
                //console.log(data);
                //console.log(data.length);
                //document.getElementById("root").innerHTML = JSON.stringify(data);
                return data;
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });


 //json write to file


    //data.writeFile;

    // const fs = require('fs')

    // const storeData = (data, path) => {
    //   try {
    //     fs.writeFileSync(path, JSON.stringify(data))
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }






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