/** JavaScript converts the numeric array index you specify to a string—the 
index 1 becomes the string "1"—then uses that string as a property name. */

var myObject = {} // object creation literal

myObject[0] = 'zero';
myObject[1] = 'one';
myObject[2] = 'two';

console.log(myObject) // { '0': 'zero', '1': 'one', '2': 'two' }

/**
 * When you use property names as negative integer, 
 * the array can't maintain the vaue of the length property.
 * 
 * distinguish an array index from an object property name. All
 * indexes are property names, but only property names that are integers between 0 and
 *  232–1 are indexes
 * 
 * Note that you can index an array using numbers that are negative or that are not integers. 
 * When you do this, the number is converted to a string, and that string is used as
 * the property name. Since the name is not a non-negative integer, it is treated as a regular
 * object property
 */

var myArray = [] // array creation literal
myArray[0] = 'zero';
myArray[-1] = 'minus one'; // negative property name => gets converted to a string because is not positive integer
myArray[1] = 'one';

console.log(myArray.length) // 2
console.log(myArray) // [ 'zero', 'one', '-1': 'minus one' ]


/**
 * When you try to
 * query a nonexistent property of any object, you don’t get an error, you simply get
 * undefined. This is just as true for arrays as it is for objects:
 */

var myArray_two = []
myArray_two[0] = 'hello'
myArray_two[-1] = 'how are you'
myArray_two['answer'] = 'nice'

console.log(myArray_two) // [ 'hello', '-1': 'how are you', answer: 'nice' ]
console.log(myArray_two['answer_incorrect']) // undefined