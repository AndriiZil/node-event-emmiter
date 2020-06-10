const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('myEvent', () => {
  console.log('Data Received');
});

myEmitter.emit('myEvent');

/*
Data Received
 */