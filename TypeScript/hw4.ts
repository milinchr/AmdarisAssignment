
interface IAnimal{
    readonly animalId: string;
    name : string;
    age : number;
    color : string;
    level : number;
    XP : number;
    growXP : () => void;
}

class Cat implements IAnimal{
    readonly animalId: string;
    name: string;
    age: number;
    color: string;
    level : number = 0;
    XP : number = 0;

    constructor(animalId : string, name : string, age : number, color : string){
        this.animalId = animalId;
        this.name = name;
        this.age = age;
        this.color = color;
    }

    public growXP(){
        this.XP += 5;
        if(this.XP == 20){
            this.level += 1;
            this.XP = 0;
        }
    }
}

const cat = new Cat("0001","Luna",3,"white");
console.log(cat.XP,cat.level);

let i : number = 0;
for(i = 0; i < 10; i++){
    cat.growXP();
}

console.log(cat.XP,cat.level);

const PI = 3.14;
interface CircleArea{
    (radius : number) : number;
}

const circleArea : CircleArea = (radius : number) => PI * Math.pow(radius,2);
console.log();
console.log(circleArea(4));
