const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

function func1() {
  console.log('EVENT TRIGGERED');
}

eventEmitter.on('myEvent', func1);
eventEmitter.on('myEvent2', func1);

console.log(eventEmitter.eventNames());

eventEmitter.removeListener('myEvent', func1); // Remove listener

console.log(eventEmitter.eventNames());

/*
  [ 'myEvent', 'myEvent2' ]
  [ 'myEvent2' ]
 */