//===============================
//       Clean Calc
//     version 1.0.0
//===============================

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

//------- v 1.1.0---------------

function operateIntermediary(operation, arg1, arg2) {
  // add , 5, 5,
  return operation(arg1, arg2);
}

lastResult = operateIntermediary(add, 5, 10); // 15
lastResult = operateIntermediary(multiply, 2, lastResult); // 2 * 15 = 30

console.log(lastResult);
