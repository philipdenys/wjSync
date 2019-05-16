const EventEmitter = require('events');// Events
const emitter = new EventEmitter();

var url = 'http://www.philipdenys.be';

class Logger extends EventEmitter {
    log(message) { // function log (message) // a function in a class is a method
        // send an HTTP request
        console.log(message);

        // raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;