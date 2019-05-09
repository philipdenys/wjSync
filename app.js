const path = require('path'); // Path
const os = require('os');// Computer memory
const fs = require('fs');// Syncronous & Asyncronous readout directory
const EventEmitter = require('events');// Events
const http = require('http');

// Path
// var pathObj = path.parse(__filename);
// console.log(pathObj.dir);

// Computer memory
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`total memory ${totalMemory}`);
// console.log(`free memory ${freeMemory}`);

// Syncronous
// const files = fs.readdirSync('./');
// console.log(files);

// Asyncronous
// fs.readdir('**', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// Events

// raise an event
//emitter.emit('messageLogged', { id: 1, url: 'http://' });

//console.log(emitter);

// Logger example
// const Logger = require('./logger'); // capital letter is a class
// const logger = new Logger();

// //const emitter = new EventEmitter();
// // register a lister
// logger.on('messageLogged', (arg) => { //other parameters -> e
//     console.log('Listener called', arg);
// });
// logger.log('message');

// HTTP ex.1
// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('new connection');
// });
// // go to localhost:3000
// server.listen(3000);
// console.log('listening on port 3000...');


// HTTP ex.2 (better)
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});


// go to localhost:3000
server.listen(3000);
console.log('listening on port 3000...');