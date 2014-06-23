var flight= require('./Flight');
flight.setNumber('CP100');
flight.setOrigin('LHR');
flight.setDestination('London');

console.log(flight.getInfo());

var anotherFlight= require('./Flight');
console.log(anotherFlight.getInfo());
