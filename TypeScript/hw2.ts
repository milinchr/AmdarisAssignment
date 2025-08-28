// Homework 2

// Task 1
function calculateRectangleArea(width: number, height: number): number{
    return width*height;
}

const rectangleArea : number = calculateRectangleArea(5,8);
console.log(rectangleArea);
console.log();

// Task 2
const addNumbers = function(number1 : number, number2 : number) : number{
    return number1 + number2;
}

const addNumbersArrow = (num1 : number, num2 : number) => num1 + num2;

console.log(addNumbers(7,10));
console.log(addNumbersArrow(7,10));
console.log();

// Task 3
function greetUser(name : string, age? : number) : string {
    if(age == undefined){
        return `Hello ${name}!`;
    } else {
        return `Hello ${name}! You are ${age} years old.`;
    }
}

function greet(name : string, age : number = 30) : string {
    return `Hello ${name}! You are ${age} years old.`;
}

console.log(greetUser("Alice"));
console.log(greetUser("Alice",25));

console.log(greet("Alice"));
console.log(greet("Alice",25));
console.log();

// Task 4
function getFirstElement<T>(array : T[]) : T | undefined{
    return array[0];
}

// Task 5
function createArray<T>(...items : T[]) : T[] {
    return items;
}

// Task 6
function isArrayEmpty<T>(array : T[]) : boolean {
    return array.length === 0;
}

const numbers = createArray<number>(1,2,3);
const strings = createArray<string>("Hi","Hello","Hey");
const array : any = [];

console.log(numbers);
console.log("First elemnent:",getFirstElement(numbers));
console.log(strings);
console.log("First element:",getFirstElement(strings));
console.log();

console.log("Is array \"numbers\" empty?",isArrayEmpty(numbers));
console.log("Is array \"array\" empty?",isArrayEmpty(array));

// function someMethod<T>(property : T) : T{
//     return property;
// }

// const c : string = "Hello World";
// const num : number = 123;
// const a = someMethod(c);
// const b = someMethod(num);
// a.