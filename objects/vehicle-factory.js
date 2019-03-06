'use strict';
// ---------------------------------------------------------------------
// Vinicio - since I'm making a car factory, I still need the traditional
// constructor for Vehicle.
const Vehicle = function(name, wheels) {
	// Vinicio - this part will what in classes we call "costructor"
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};
// ---------------------------------------------------------------------
function Car(name,color) {
	// Vinicio - this is suppose to have the same interface as Vehicle,
	// but it should add the color
	const newCar = Object.assign(
			new Vehicle(name, 4),
			{color},
	);
	// Vinicio - this is not a "HARD" requirement to have a factory
	return Object.freeze(newCar);
}

function Motorcycle(name) {
	const newMotorcycle = Object.assign(
			new Vehicle(name, 2),
			{wheelie},
	);
	function wheelie() {
		return 'Wheee!';
	}
	return Object.freeze(newMotorcycle);
}


module.exports = {Car, Motorcycle};
