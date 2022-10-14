// Inneficient because in each iteration the array length gets recalculated.
var students = ["Jhon", "Alex", "Sofia"];
for (let i = 0; i < students.length; i++) {
  console.log(students[i])
}

// // The trick is to save the array length len = students.length
for(let i = 0, len = students.length; i < len; i++) {
    console.log(students[i])
}

// If you want to exclude null, undefined, and nonexistent elements, you can write this:
for (let i = 0, len = students.length; i < len; i++) {
  if (!students[i]) continue;
}

// If you wanna iterate over the index and the value use a for/in loop.
students[-3] = "Desconocido";
for (let student in students) {
  if (student < 0) {
    console.log(`Index is ${student} and object is ${students[student]}`);
  }
}

/**
 * iterating array elements by passing
 * each one, in index order, to a function that you define. The forEach()
 */
