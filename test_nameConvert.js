const path = require('path');

// ((brand)) – ((model))-((sku))-((unique ID)).jpg

// Ex.
// Orphelia-Tempo-or81800-123.jpg

var jsonExample = {
  Images: [
    {
      ImageSort: null,
      ImageURL: "https://uwt.blob.core.windows.net/dsales/partimage/zk-71851_t6vz9b.jpg",
      IsDefault: true,
      ImageUpdateUTC: "2016-04-21T12:41:09"
    },
    {
      ImageSort: null,
      ImageURL: "https://uwt.blob.core.windows.net/dsales/partimage/zk-71851_976t4s.jpg",
      IsDefault: false,
      ImageUpdateUTC: "2016-05-03T10:53:51"
    },
    {
      ImageSort: null,
      ImageURL: "https://uwt.blob.core.windows.net/dsales/partimage/zk-71851_u9cy2x.jpg",
      IsDefault: false,
      ImageUpdateUTC: "2016-04-21T12:41:07"
    },
    {
      ImageSort: null,
      ImageURL: "https://uwt.blob.core.windows.net/dsales/partimage/zk-71851_j4ptwz.jpg",
      IsDefault: false,
      ImageUpdateUTC: "2016-04-21T12:41:08"
    }
  ]
};


// KEYS
//console.log(jsonExample.Images[0].length;
// console.log(Object.keys(jsonExample.Images).length); //get amount of keys per product // 4
// console.log(Object.keys(jsonExample.Images[0])); //get all image keys per product // lists the keys of an image

// VALUES
// console.log(Object.values(jsonExample.Images)); // gets the values of the object
// console.log(Object.values(jsonExample.Images[0])); // gets the values of the image

var oldUrl1 = "https://uwt.blob.core.windows.net/dsales/partimage/oh48zeyj_11722.jpg"; //14
var oldUrl2 = "https://uwt.blob.core.windows.net/dsales/partimage/zk-71851_t6vz9b.jpg"; //15
var oldUrl3 = "https://uwt.blob.core.windows.net/dsales/partimage/y3cqzj4f_or32800.jpg"; //16

// get json file

// get all values image link without extracting the keys and values (just replace)
function ConvertUrl(url) {
  var filename = url.substring(url.lastIndexOf("/") + 1); // get the last slash and chops off the base url
  var filenameText = filename.replace(/\.[^/.]+$/, "");
  var obj = filenameText.split("_"); // two values in obj

console.log(obj);
  // apply regex to find out the series() of 2 letters and) 3 numbers
  var regex4 = /\d{4}/;
  if (regex4.test(obj[0])){
     //true
  }else{
     //false
  }
  console.log(obj);
}

ConvertUrl(oldUrl1); // outputs the correct filename to use

// devide the filename into two vars and test if the last 5 characters are numbers
// remove/replace with the new string

// if the test can't find an outcome leave the current string (old url) this can be due to the fact of old skus

// "Orphelia-Tempo-or81800-123.jpg"
// var imageUrl = baseUrl + newUrl;
