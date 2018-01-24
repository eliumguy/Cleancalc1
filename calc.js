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

//---------v 1.2.0---------------------

function operate(operation, arg1, arg2) {
  //  add 5 3  // add 5 no arg2
  if (arg2) {
    return (lastResult = operation(arg1, arg2)); //8
  } else {
    return (lastResult = operation(arg1, lastResult)); // 5 + 8  = 13
  }
}

console.log(operate(add, 5, 3)); //8

console.log(operate(add, 5)); // 13
