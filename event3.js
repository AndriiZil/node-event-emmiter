const EventEmitter = require('events');

const eventEmitter1 = new EventEmitter();

eventEmitter1.on('myEvent', () => {
  console.log('Listener');
});

const eventEmitter2 = new EventEmitter();
eventEmitter2.emit('myEvent');


eventEmitter1.emit('myEvent')
/*
Listener
 */