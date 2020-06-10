const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', () => {
  console.log('Listener 1');
});

eventEmitter.emit('myEvent');

eventEmitter.on('myEvent', () => {
  console.log('Listener 2');
});

/*
Listener 1
 */