// Function Types
function add(a: number, b: number): number {
  return a + b;
}

let myAdd: (a: number, b: number) => number = function(a, b) {
  return a + b;
}
add(1, 2);
myAdd(2, 4);

// Optional and Default Parameters
function buildName(firstName: string, lastName?: string) {
  return firstName + ' ' + lastName;
}

function buildNameV2(firstName: string, lastName = 'Tom') {
  return firstName + ' ' + lastName;
}

// Rest Parameters
function buildNameV3(firstName: string, ...restNames: string[]) {
  return firstName + ' ' + restNames.join(' ');
}

// this
