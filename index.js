let person = {
  firstName: "Sinisa",
  lastName: "Milicic",
  age: 27
};

let personJSON = {
  "firstName" : "Sinisa",
  "lastName" : "Milicic",
  "age": 27
};

// Because personJSON is already an object it cannot be parsed again to an object, so I stringified it in order to be able to parse it correctly, otherwise we get the "Uncaught SyntaxError: Unexpected token o in JSON" error

let parsedPerson = JSON.parse(JSON.stringify(personJSON));
console.log(parsedPerson);

let stringifiedPerson = JSON.stringify(person);
console.log(stringifiedPerson);

// JS and JSON array of numbers

let numbersJS = [1,2,3,4,5];
let numbersJSON = {"numbers":[1,2,3,4,5]};

let parsedNumbers = JSON.parse(JSON.stringify(numbersJSON));
for (i in parsedNumbers.numbers) {
    console.log(parsedNumbers.numbers[i]);
  }
