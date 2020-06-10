const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', (data) => {
  console.log(data);
});

console.log('Statement A');
eventEmitter.emit('myEvent', 'Statement B');
console.log("Statement C");

/*
Statement A
Statement B
Statement C
 */