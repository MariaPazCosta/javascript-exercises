const convertToCelsius = function(temperatureInFah) {
//(x − 32) × ⁠5/9
let temperatureInCel=((temperatureInFah - 32)* (5/9))
return Number((temperatureInCel).toFixed(1))

};

//x × ⁠9/5+ 32
const convertToFahrenheit = function(temperatureInCel) {
  let temperatureInFah=(temperatureInCel*(9/5)+32)
  return Number((temperatureInFah).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
