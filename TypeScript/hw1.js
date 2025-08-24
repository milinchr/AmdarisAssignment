"use strict";
// Homework 1
Object.defineProperty(exports, "__esModule", { value: true });
// Task 1
var age = 18;
var name = "Liudmila";
var female = true;
console.log(age);
console.log(typeof (age));
console.log(name);
console.log(typeof (name));
console.log(female);
console.log(typeof (female));
// Task 2
const PI = 3.14;
const radius = 3;
var circumference = 2 * PI * radius;
console.log("\n" + circumference + "\n");
// Task 3
var foods = ['Pizza', 'Vegetable soup', 'Kebab', 'Fried Potato', 'Green Salad'];
var i;
for (i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}
console.log();
// Task 4
const personAge = 20;
if (personAge > 18) {
    console.log("You are an adult!");
}
else if (personAge < 13) {
    console.log("You are a child!");
}
else {
    console.log("You are a teenager!");
}
// Task 5
var anyStr = "123";
var toStr = anyStr;
console.log("\n" + toStr * 2);
// Task 6
var mixedArray = [2, "Hello", 3, "Bye"];
var sum = 0;
for (i = 0; i < mixedArray.length; i++) {
    if (typeof (mixedArray[i]) == "number") {
        sum += mixedArray[i];
    }
}
console.log("\n" + sum);
//# sourceMappingURL=hw1.js.map