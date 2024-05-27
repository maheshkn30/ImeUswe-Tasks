const { add, getCureentData } = require("./index.js");

// Test the addTwoNumbers function
const sum = add(5, 5);
console.log("Sum:", sum); // Output: Sum: 10

// Test the getCurrentDate function
const currentDate = getCureentData();
console.log("Current Date:", currentDate); // Output: Current Date: YYYY/MM/DD (actual current date)
