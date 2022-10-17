/**
 * One important use of the Arguments object is
 * to write functions that operate on any number of arguments.
 */

function max(/* optional */) {
  var max = Number.NEGATIVE_INFINITY;

  // Loop through the arguments, looking for, and remembering, the biggest.
  for (var i = 0; i < arguments.length; i++)
    if (arguments[i] > max) max = arguments[i];
  return max; // Return the biggest
}

var largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // => 10000
console.log(max(largest));

largest = max(1); // => 1
console.log(max(largest));

largest = max(); // => 1
console.log(max(largest));
