const path = require('path');
const os = require('os');

// var pathObj = path.parse(__filename);
// console.log(pathObj.dir);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`total memory ${totalMemory}`);
