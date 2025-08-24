"use strict";
// Homework 2
Object.defineProperty(exports, "__esModule", { value: true });
// Task 1
function calculateRectangleArea(width, height) {
    return width * height;
}
const rectangleArea = calculateRectangleArea(5, 8);
console.log(rectangleArea);
console.log();
// Task 2
const addNumbers = function (number1, number2) {
    return number1 + number2;
};
const addNumbersArrow = (num1, num2) => num1 + num2;
console.log(addNumbers(7, 10));
console.log(addNumbersArrow(7, 10));
console.log();
// Task 3
function greetUser(name, age) {
    if (age == undefined) {
        return `Hello ${name}!`;
    }
    else {
        return `Hello ${name}! You are ${age} years old.`;
    }
}
function greet(name, age = 30) {
    return `Hello ${name}! You are ${age} years old.`;
}
console.log(greetUser("Alice"));
console.log(greetUser("Alice", 25));
console.log(greet("Alice"));
console.log(greet("Alice", 25));
console.log();
// Task 4
function getFirstElement(array) {
    return array[0];
}
// Task 5
function createArray(...items) {
    return items;
}
// Task 6
function isArrayEmpty(array) {
    return array.length === 0;
}
const numbers = createArray(1, 2, 3);
const strings = createArray("Hi", "Hello", "Hey");
const array = [];
console.log(numbers);
console.log("First elemnent:", getFirstElement(numbers));
console.log(strings);
console.log("First element:", getFirstElement(strings));
console.log();
console.log("Is array \"numbers\" empty?", isArrayEmpty(numbers));
console.log("Is array \"array\" empty?", isArrayEmpty(array));
//# sourceMappingURL=hw2.js.map