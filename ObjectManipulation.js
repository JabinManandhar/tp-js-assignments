/* Object Manipulation:

Write a program that creates an object representing a person with properties like name, age, and gender.

Write a program that takes two objects as input and merges their properties into a single object.
{name: sudarshan, address: gairidhara} {phone: 1234567890} 
-> {name: sudarshan, address: gairidhara} phone: 1234567890}

Write a program that takes an array of objects representing students and returns an array of their names.
[{name: sudarshan}, {name: nikesh}] -> [sudarshan, nikesh]

Write a program that takes an object representing a student with properties like name and grades, and calculates their average grade.
[{name: Sudarshan, marks: 40}, {name: suraj, marks: 100}, {name: simran, marks: 100}]
	-> Average is 80

Write a program that takes an array of objects representing books with properties like title and author, and sorts them alphabetically by title.
*/

/* 1. Write a program that creates an object representing a person with properties like name, age, and gender. */

console.log("Q1. Create an object with some properties");

const person = {
  name: "Jackie",
  age: 23,
  gender: "male",
};

console.log(person);

/* 2. Write a program that takes two objects as input and merges their properties into a single object.
{name: sudarshan, address: gairidhara} {phone: 1234567890} 
-> {name: sudarshan, address: gairidhara} {phone: 1234567890} */

console.log("\n Q2. Merge two object properties");

const person1 = {
  name: "Jackie",
  age: 23,
  gender: "male",
};

const person2 = {
  phone: 9861184333,
};

function mergeObjects(obj1, obj2) {
  return { ...Object.keys(obj1), ...Object.keys(obj2) };
}

console.log(mergeObjects(person1, person2));
// const mergedObjects=mergeObjects(person1, person2);
// console.log(mergedObjects[0]);

/* 3. Write a program that takes an array of objects representing students and returns an array of their names.
[{name: sudarshan}, {name: nikesh}] -> [sudarshan, nikesh] */

console.log("\n Q3. Return names property values from array of objects");

const arrayObjects = [
  {
    name: "Sudarshan",
  },
  {
    name: "Jackie",
  },
];

// console.log(arrayObjects[0]);
// console.log(arrayObjects[1]);

// console.log(arrayObjects[0].name);
// console.log(arrayObjects[1].name);
const emptyArray = [];

function objectNamesArray(arrayObjects) {
  for (object of arrayObjects) {
    emptyArray.push(object.name);
    // console.log(newArray)
  }
  return emptyArray;
}

console.log(objectNamesArray(arrayObjects));

/* 4. Write a program that takes an object representing a student with properties like name and grades, and calculates their average grade.
[{name: Sudarshan, marks: 40}, {name: suraj, marks: 100}, {name: simran, marks: 100}]
	-> Average is 80
 */

console.log("\n Q4. Average grade from array of objects");

const arrayObject2 = [
  { name: "Sudarshan", marks: 40 },
  { name: "suraj", marks: 100 },
  { name: "simran", marks: 100 },
];

function averageGrades(arrayObject2) {
  let sum = 0;
  for (let i = 0; i < arrayObject2.length; i++) {
    sum += arrayObject2[i].marks;
  }
  return sum / arrayObject2.length;
  //   console.log(Object.values(arrayObject2));
}

console.log(averageGrades(arrayObject2));
