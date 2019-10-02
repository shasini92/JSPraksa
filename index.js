// Creating colors array anod using for and forEach

let colors = ["Red", "Green", "Blue", "Yellow"];

for (let i = 0; i < colors.length; i++) {
  console.log(`Color in the for loop is: ${colors[i]}`);
}

colors.forEach(color => console.log(`Color in the forEach loop is: ${color}`));

// Array rotation
let array = [1, 2, 3, 4, 5];

let arrayRotate = (array, count) => {
  for (let i = 0; i < count; i++) {
    array.unshift(array.pop());
  }

  console.log(
    `The new array is [${array}] and it has been shifted by ${count} steps.`
  );
};

arrayRotate(array, 2);

// Sum of numbers using reduce
let numbers = [1, 2, 3, 4, 5];

let total = array =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue, 50);

console.log(`The sum is ${total(numbers)}.`);

// A function that creates an incremental and decremental array.

let createArray = numberOfElements => {
  let array = [];
  for (let i = 0; i <= numberOfElements; i++) {
    if (i < numberOfElements) array.push(i);
    else {
      array.push(i);
      for (let k = numberOfElements - 1; k >= 0; k--) {
        array.push(k);
      }
    }
  }

  console.log(array);
};

createArray(5);

// Zoo inventory function

let myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];

let zooInventory = inventory => {
  let animals = [];
  inventory.forEach(animal => {
    animals.push(`${animal[0]} the ${animal[1][0]} is ${animal[1][1]}`);
  });
  console.log(animals);
};

zooInventory(myZoo);

// INPUT: zooInventory(myZoo);
// OUTPUT: [
//   "King Kong the gorilla is 42",
//   "Nemo the fish is 5",
//   "Punzsutawney Phil the groundhog is 11"
// ];
