/**
 * A sparse array is one in which the elements do not have contiguous indexes starting at 0.
 * the value of the length property is greater than the number
 * of elements
 */

var a1 = [,,,] // [ <3 empty items> ] => undefined, undefined, undefined
var a2 = [] // no elements
var a3 = new Array() // no elements

/**
 * Arrays that are sufficiently sparse are typically implemented in a slower, 
 * more memoryefficient way than dense arrays are, and looking up elements in such an array will take
 * about as much time as regular object property lookup.
 */

var x = [1, 2, 3]
console.log(String(x))