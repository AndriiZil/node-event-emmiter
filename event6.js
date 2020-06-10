const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

console.log(eventEmitter.setMaxListeners(20));

console.log(eventEmitter.getMaxListeners()); // => 20

console.log(eventEmitter.eventNames()); // => []

