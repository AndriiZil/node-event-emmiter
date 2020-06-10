const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', data => console.log(data, '- ON'));
eventEmitter.on('myEvent2', data => console.log(data, '- ON'));
eventEmitter.once('myEvent3', data => console.log(data, '- ONCE'));

console.log(eventEmitter.eventNames());

eventEmitter.emit('myEvent3', 'EVENT');

console.log(eventEmitter.eventNames());

/*
  [ 'myEvent', 'myEvent2', 'myEvent3' ]
  EVENT - ONCE
  [ 'myEvent', 'myEvent2' ] // Without "myEvent3"
 */