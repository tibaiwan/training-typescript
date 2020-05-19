// class
class Greet {
    greeting: string;
    constructor(greeting: string) {
        this.greeting = greeting;
    };
    greet() {
        console.log("hello, "+ this.greet);
    }
}

let greeter = new Greet('world');

// Public, private, and protected modifiers
class Animal {
    private name: string;
    protected sex: string;
    public age: number;
    constructor(name: string, sex: string) {
        this.name = name;
        this.sex = sex;
    }
    move(distance: number) {
        console.log(`${this.name} moves ${distance} m.`);
    }
    getName(): string {
        return this.name;
    }
}

class Dog extends Animal {
    private color: string;
    constructor(name: string, sex: string, color: string) {
        super(name, sex);
        this.color = color;
    }
    bark() {
        console.log(`${this.getName()} is ${this.color}`);
    }
}
const ani = new Animal('jimmy', 'boy');
console.log(ani.move(3));

