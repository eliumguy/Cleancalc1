// subtract add  divide  multiply

var lastResult = null;

function add(arg1, arg2) {
  return arg1 + arg2;
}

function subtract(arg1, arg2) {
  // arg1 = 5  arg2 = 4
  return arg1 - arg2; // return 1
}

function multiply(arg1, arg2) {
  return arg1 * arg2;
}

function divide(arg1, arg2) {
  return arg1 / arg2;
}

lastResult = add(5, 5); // 10
lastResult = add(5, lastResult); // 5 +10
console.log(lastResult); //15
