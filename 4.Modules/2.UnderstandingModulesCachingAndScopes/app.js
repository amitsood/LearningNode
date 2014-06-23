var flight= require('./Flight');
var values={
		number:'LA100',
		origin:'LHR',
		destination: 'Delhi'
	};

var info=flight(values);
console.log(info.getInfo());

var anotherFlight= require('./Flight');
var anotherValues={
		number:'BA100',
		origin:'Germany',
		destination: 'USA'
	};
var anotherInfo=anotherFlight(anotherValues);
console.log(anotherInfo.getInfo());
console.log(info.getInfo());
