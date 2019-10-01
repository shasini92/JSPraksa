for (var i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("The value of i:" + i);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("The value of i:" + i);

let i = 20;
const outsideFunction = function() {
  console.log(i);
};

const insideFunction = function() {
  let i = 10;
};
console.log("The value of i:" + i);
