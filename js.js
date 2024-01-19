'use strict';
// moje rozwiązanie:

1

function test() {
	function calculateAverageTemperature(temperatureData, callback) {
		let temperatureData = [23, 24, 22, 25, 21]; 
        // ja deklarowałam tablicę tutaj, a w rozwiązaniu jest poza funkcją?
		let sum = temperatureData.reduce((previousValue, number) => {
			return previousValue + number;
		}, 0);
        // Tutaj mam }, a w rozwiązaniu go nie ma
		let average = sum / temperatureData.length;

		callback(average);
	}

	function displayAverageTemperature(average) {
		console.log(`Srednia temperatura: ${average}`);
	}
	calculateAverageTemperature(temperatureData, displayAverageTemperature);
	test();
}
// -----------------------------------

// poprawne rozwiązanie
// // 

// "use strict";
 
// function test() {
//     // Miejsce na kod JS
//     function calculateAverageTemperature(temperatureData, callback) {
//         const sum = temperatureData.reduce(
//             (total, temperature) => total + temperature,
//             0
//         );
//         const average = sum / temperatureData.length;
//         callback(average);
//     }
 
//     const temperatureData = [23, 24, 22, 25, 21];
 
//     function displayAverageTemperature(average) {
//         console.log(`Srednia temperatura: ${average}`);
//     }
 
//     calculateAverageTemperature(temperatureData, displayAverageTemperature);
// }
 
// test();