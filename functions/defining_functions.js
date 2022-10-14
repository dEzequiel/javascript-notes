/**
 * The main difference between a function expression and a function declaration 
 * is the function name, which can be omitted in function expressions to create anonymous functions.

 * A function expression can be used as an IIFE (Immediately Invoked Function Expression) 
 * which runs as soon as it is defined.
 */

// Function expressions in JavaScript are not hoisted
// notHoisted() // TypeError: notHoisted is not a function
var notHoisted = function() { console.log('undefined') }        // notHoisted => undefined

// Function declaration in JavaScript are hoisted 
hoisted()
function hoisted() {
    console.log('hoisted')
}

// Using an Immediately Invoked Function Expression (IIFE). An anonymous function is created and called:
(function () {
    console.log("Don't invoke me, im running anyways...")
})();