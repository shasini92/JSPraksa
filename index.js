// Promises

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  setTimeout(() => {
    resolve("Success!");
    reject("Error!");
  }, 250);
});

myFirstPromise
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(errorMessage => console.log(errorMessage));

//   Promise.all()

let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values);
});
