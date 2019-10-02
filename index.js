// Using map to create a new array of squared numbers
let arrayOfNumbers = [1, 2, 3, 4, 5];

let squaredNumbers = arrayOfNumbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers);

// IIFE
let a = 5;
let b = 7;
let result = (function() {
  console.log(a + b);
})();

// Creating an arrow function
function timesTwo(number) {
  return number * 2;
}

let ArrowTimesTwo = number => number * 2;

console.log(ArrowTimesTwo(5));
