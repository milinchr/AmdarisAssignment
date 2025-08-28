class Device{
    name : string; 
    height : number; // mm
    lenght : number; // mm
    weight : number; // g
    screenSize : number; // inch

    constructor(name : string, height : number, lenght : number, 
        weight : number, screenSize : number){
        this.name = name;
        this.height = height;
        this.lenght = lenght;
        this.weight = weight;
        this.screenSize = screenSize;
    }

    turnOn(){
        return "Device is on.";
    }

    turnOff(){
        return "Device is off.";
    }
}

class Laptop extends Device{
    private readonly _hasKeyboard : boolean;
    private _hasTouchScreen : boolean;

    constructor(name : string, height : number, lenght : number, 
        weight : number, screenSize : number, hasKeyboard : boolean, 
        hasTouchScreen : boolean){
            super(name,height,lenght,weight,screenSize);
            this._hasKeyboard = hasKeyboard;
            this._hasTouchScreen = hasTouchScreen;
        }

    static call(){
        return "Connecting...";
    }

    openCamera(){
        return "Camera is turned on!";
    }

    shoot(){
        return "3... 2... 1... Smile!";
    }

    get hasKeyboard(){
        return this._hasKeyboard;
    }

    get hasTouchScreen(){
        return this._hasTouchScreen;
    }

    set hasTouchScreen(screen : boolean){
        this._hasTouchScreen = screen;
    }

    info(){
        return this.name+` is ${this.screenSize}"(${this.lenght}mm x ${this.height}mm), weights ${this.weight}g.`;
    }
}

class Smartphone extends Device{
    private _hasTouchScreen : boolean;

    constructor(name : string, height : number, lenght : number, 
        weight : number, screenSize : number, hasTouchScreen : boolean){
            super(name,height,lenght,weight,screenSize);
            this._hasTouchScreen = hasTouchScreen;
        }

    static call(){
        return "Connecting...";
    }

    openCamera(){
        return "Camera is turned on!";
    }

    shoot(){
        return "3... 2... 1... Smile!";
    }

    get hasTouchScreen(){
        return this._hasTouchScreen;
    }

    set hasTouchScreen(screen : boolean){
        this._hasTouchScreen = screen;
    }

    info(){
        return this.name+` is ${this.screenSize}"(${this.lenght}mm x ${this.height}mm), weights ${this.weight}g.`;
    }
}

const samsung = new Smartphone("Samsung S24+",158.5,75.9,196,6.7,false);
const tuf = new Laptop("Laptop Asus TUF Gaming A15",256,359,2.3,15.6,true,true);

console.log(Laptop.call());
console.log(Smartphone.call());

console.log("\n"+samsung.openCamera());
console.log(samsung.shoot());

console.log("\n"+tuf.hasKeyboard);
tuf.hasTouchScreen = false;
console.log(tuf.hasTouchScreen);

samsung.hasTouchScreen = true;
console.log(samsung.hasTouchScreen);

console.log("\n"+samsung.info());
console.log(tuf.info());

abstract class Animal{
    name : string;
    color : string;

    constructor(name : string, color : string){
        this.name = name;
        this.color = color;
    }

    abstract sound() : string;
}

class Dog extends Animal{
    constructor(name : string, color : string){
        super(name,color);
    }

    sound(): string {
        return "Woof!";
    }
}

class Cat extends Animal{
    constructor(name : string, color : string){
        super(name,color);
    }

    sound(): string {
        return "Meow!";
    }
}

const cat = new Cat("Lucy","ginger");
const dog = new Dog("Robert","golden");

console.log("\n"+cat.sound());
console.log(dog.sound());