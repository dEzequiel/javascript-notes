/**
 * When a function is stored in an object property, its called method.
 *
 * The invocation context of methods are the object itself where the property
 * is stored. You can access all object properties inside method body by this.
 *
 * Any function that is used as a method is effectively passed an implicit argument—
 * the object through which it is invoked. That's why we can acces object properties.
 */

var myObj = {
  name: "eze",
  age: 20,

  getInfo: function getInfo() {
    this.info = `Name: ${this.name} // Age: ${this.age}`;
    // Creates a new property in fly.
  },
};

// myObj.getInfo()
myObj["getInfo"](); // another way of invoking the method
console.log(myObj.info); //info property was created when getInfo() gets invoked.

/**
 * If a nested function is invoked as a method, its
 * this value is the object it was invoked on. If a nested function is invoked as a function
 * then its this value will be either the global object
 */

var x = {
  name: "Susan",
  m: function () {
    var self = this;
    console.log(self === this); //true

    f(); // invokation as function

    function f() {
      // invokation as function, so the this is the global object
      console.log(this === self); // false
      console.log(this === x); // false
      console.log(this === globalThis); // true
    }
  },
};

x.m(); // invokation as method, so the this is the caller object

/** Indirect invocation 
 * call() and apply(), invoke the function indirectly. Both methods
 * allow you to explicitly specify the this value for the invocation, which means you can
 * invoke any function as a method of any object, even if it is not actually a method of
 * that object
 */

var obj1 = {
  identifier: "Soy el objeto 1",
  m: function () {
    return `Quien eres? ${this.identifier}`;
  },
};

var obj2 = {
  identifier: "Soy el objeto 2",
};

console.log(obj1.m.apply(obj2))
console.log(obj1.m.call(obj2));
