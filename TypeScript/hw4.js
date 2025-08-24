"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cat {
    animalId;
    name;
    age;
    color;
    level = 0;
    XP = 0;
    constructor(animalId, name, age, color) {
        this.animalId = animalId;
        this.name = name;
        this.age = age;
        this.color = color;
    }
    growXP() {
        this.XP += 5;
        if (this.XP == 20) {
            this.level += 1;
            this.XP = 0;
        }
    }
}
const cat = new Cat("0001", "Luna", 3, "white");
console.log(cat.XP, cat.level);
let i = 0;
for (i = 0; i < 10; i++) {
    cat.growXP();
}
console.log(cat.XP, cat.level);
const PI = 3.14;
const circleArea = (radius) => PI * Math.pow(radius, 2);
console.log();
console.log(circleArea(4));
//# sourceMappingURL=hw4.js.map