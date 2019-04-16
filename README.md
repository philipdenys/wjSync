# wjSync
API between the webshop Watch-Jewel and Dsales.

https://github.com/christiannwamba/node-cron-jobs/blob/master/index.js

1. npm install express node-cron fs
express - powers the web server
node-cron - task scheduler in pure JavaScript for node.js
fs - node file system module

2. https://scotch.io/tutorials/nodejs-cron-jobs-by-examples#toc-building-the-backend-server

3. 


## Dashboard
1.
2.

## CRON steps
daily fetch of the url

1. 
2.

## Issues

### fetch()
The fetch API is not implemented in Node.
You need to use an external module for that, and a good one is node-fetch.
Install it in your Node application as bellow

`npm i node-fetch --save`
then put the line below at the top of the files where you are using the fetch API:
`const fetch = require("node-fetch");`

https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined

### require()
This is because require() does not exist in the browser/client-side JavaScript.

Now you're going to have to make some choices about your client-side JavaScript script management.

You have three options:

Use <script> tag.
Use a CommonJS implementation. Synchronous dependencies like Node.js
Use an AMD implementation.

https://stackoverflow.com/questions/19059580/client-on-node-uncaught-referenceerror-require-is-not-defined
https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8
