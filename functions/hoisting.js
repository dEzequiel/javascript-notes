/**
 * Hoisting in nested functions work as well as variables with the difference
 * they are not undefined.
 */

function number() {
  return 2;
}

number(); // return 2

// The inner scope wins over the global scope.

function nestedNumber() {
  console.log(number());
  function number() {
    return 4;
  }
}

nestedNumber(); // 4
