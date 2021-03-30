// Interface
interface labeledValue {
  label: string;
}

function printLabel(labelObj: labeledValue) {
  console.log('Print', labelObj.label);
}

let myObj = { label: 'hello label', size: 100 };
printLabel(myObj);

// Optional Properties
interface squareConfig {
  color?: string;
  width?: number;
}

function getSquareInfo(squareObj: squareConfig): { color: string, area: number } {
  let info = { color: 'red', area: 10000 }
  if (squareObj.color) {
    info.color = squareObj.color;
  }
  if (squareObj.width) {
    info.area = squareObj.width * squareObj.width;
  }
  return info;
}

let mySquare = getSquareInfo({ color: 'yellow' });

// Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let a: number[] = [1, 2, 3, 5];
let ra: ReadonlyArray<number> = a;

// Excess Property Checks
// let mySquareV = getSquareInfo({ colorVVV: 'yellow' });

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearchFunc: SearchFunc;
mySearchFunc = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
}

// Indexable Types
interface StringArray {
  [index: number]: string;
}

let myStringArray = ['Jack', 'Tom'];
let nameF: string = myStringArray[0];

// Class Types
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
}

// Extending Interfaces
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let mySquareM = {} as Square;
mySquareM.color = 'green';
mySquareM.sideLength = 120;

// Hybird Types

// Interfaces Extending Classes
