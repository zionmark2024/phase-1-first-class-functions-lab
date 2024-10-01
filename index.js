// Code your solution in this file!
 
// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2);
}

// Function to return the last two drivers
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array containing the two driver functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//Function that returns a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
      return fare * multiplier;
  };
}

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on a function
function selectDifferentDrivers(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}