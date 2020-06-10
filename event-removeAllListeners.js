const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

function func1() {
  console.log("EVENT TRIGGERED");
}

eventEmitter.on("myEvent", func1);
eventEmitter.on("myEvent2",func1);

eventEmitter.removeAllListeners();
console.log(eventEmitter.eventNames());

/*
  []
 */