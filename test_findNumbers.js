var myString = "tuxwuhkocx163ljmgwsxvne";

var twentyDigits = /\d{4}/;
if (twentyDigits.test(myString)){
  console.log("My string has 4 running numbers");
}else
{
    console.log("My string doesn't have 4 running numbers");
    
}