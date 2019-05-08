# wjSync http://control.watch-jewel.com/

API between the webshop Watch-Jewel and Dsales.

https://github.com/christiannwamba/node-cron-jobs/blob/master/index.js

1. npm install express node-cron fs express - powers the web server node-cron - task scheduler in pure JavaScript for node.js fs - node file system module

2. https://scotch.io/tutorials/nodejs-cron-jobs-by-examples#toc-building-the-backend-server

# Dashboard

## CRON steps

_daily fetch of the url_ https://www.npmjs.com/package/cron

1. 2.

## Issues

### fetch()

The fetch API is not implemented in Node. You need to use an external module for that, and a good one is node-fetch. Install it in your Node application as bellow

`npm i node-fetch --save` then put the line below at the top of the files where you are using the fetch API: `const fetch = require("node-fetch");`

https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined

### require()

This is because require() does not exist in the browser/client-side JavaScript. Now you're going to have to make some choices about your client-side JavaScript script management. You have three options: Use <script> tag. Use a CommonJS implementation. Synchronous dependencies like Node.js Use an AMD implementation.

https://stackoverflow.com/questions/19059580/client-on-node-uncaught-referenceerror-require-is-not-defined https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8

### fs (is standard in NODEjs doesn't need a package)

https://tutorialedge.net/javascript/nodejs/reading-writing-files-with-nodejs/

### date

https://www.toptal.com/software/definitive-guide-to-datetime-manipulation

### jewelry vs watches

Seperate the catergories and push?

## Git (from server to git)

git push origin master

## Convert filename string with a new format

1. get json file
2. get all values image link without extracting the keys and values (just replace)
3. get filename (https://befused.com/javascript/get-filename-url)
4. remove/replace the base url string
5. apply regex to find out the series of 2 letters and 5 numbers
6.
