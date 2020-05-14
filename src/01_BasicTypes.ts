// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 8;

// String
let str: String = 'jimy';

// Array
let arr: number[] = [12, 4, 5];
let arr2: Array<number> = [1, 3, 4];

// Tuple 元祖
let x: [number, string] = [1, '234'];
x = [2, 'xyz'];

// Enum
enum Color { Red, Green, Blue };
let color: Color = Color.Blue;

// Any
let notSure: any = 1;
notSure = '123';

// Void
function warnUser(): void {
    console.log('hello void');
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// never
function error(message: string): never {
    throw new Error(message);
}

// Object
declare function create(o: object | null): void;

// Type assertions
let someValue = 'this is a string';
let strLen: number = (<string>someValue).length;

let someValue2 = 'this is a string';
let strLen2: number = (someValue2 as string).length;
