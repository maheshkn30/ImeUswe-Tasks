// 6. Write the following functions in index.js and import them in test.js file:
// (a) Function to add two numbers
// (b) Function to return the current date in the format "Year/Month/Day".

// A
const add = function (first, second) {
  const c = first + second;
  console.log(c);
  alert(`${first} + ${second} =${c}`);
};
let a = Number(prompt("Enter the First Number"));
let b = Number(prompt("Enter the Second Number"));

add(a, b);

//  B
const getCureentData = function () {
  const now = new Date();
  console.log(now);
  const year = now.getFullYear();
  const mon = now.getMonth();
  const day = +now.getDate();

  console.log(`${year}/${mon}/${day}`);
};
getCureentData();
