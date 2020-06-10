const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', data => {
  console.log(data, "- ON");
});

eventEmitter.once('myEvent', data => {
  console.log(data, '- ONCE');
});

eventEmitter.emit('myEvent', 'Emitted Statement');
eventEmitter.emit('myEvent', 'Emitted Statement');
eventEmitter.emit('myEvent', 'Emitted Statement');

/*
  Emitted Statement - ON
  Emitted Statement - ONCE
  Emitted Statement - ON
  Emitted Statement - ON
 */