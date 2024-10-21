/* 

Array Manipulation:

1) Write a program that takes two arrays as input and merges them into a single array.
[1,2,3] [4,5,6] -> [1,2,3,4,5,6]

2) Write a program that takes an array of numbers as input and returns the largest number.
[4,2,6,8] -> 8

3) Write a program that takes an array of strings as input and sorts them alphabetically.
[d,e,f,a] -> [a,d,e,f]

4) Write a program that takes an array of numbers as input and removes all duplicates.
[a,a,b,d,e,e,f] -> [a.b.d.e.f]

5) Write a program that takes an array of numbers as input and returns a new array with only the even numbers.
[1,2,3,4,5,6,7,8,9] -> [2,4,6,8]

*/

/* 1. Write a program that takes two arrays as input and merges them into a single array.
[1,2,3] [4,5,6] -> [1,2,3,4,5,6]
*/

console.log("Q1. Merge two arrays:");

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function joinArray(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(joinArray(array1, array2));

// console.log(array1,array2);

console.log("=========Q1 finished=========");

/* 2. Write a program that takes an array of numbers as input and returns the largest number.
[4,2,6,8] -> 8
 */

console.log("Q2. Return the largest number in an array:");

/* METHOD 1: Using for loop */

// const num1 = [1, 2, 3, 4, 9, 101];
// let max = -99999;

// function maxArrayElement(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(maxArrayElement(num1));

/* METHOD 2: Using reduce function */

// QUERY: Without using MAX

const num2 = [4, 2, 6, 8];
let max = -99999;

const maxNumber = num2.reduce((prevValue, currentValue) => {
  if (currentValue > prevValue) {
    max = currentValue;
  }
  return max;
});

console.log(maxNumber);

console.log("=========Q2 finished=========");

/* 3. Write a program that takes an array of strings as input and sorts them alphabetically.
[d,e,f,a] -> [a,d,e,f]
 */

console.log("Q3. Sort array elements alphabetically");

const arrayAlphabet = ["d", "e", "f", "a"];

function sortArrayAlphabetically(arrayAlphabet) {
  return arrayAlphabet.sort();
}

console.log(sortArrayAlphabetically(arrayAlphabet));

// function swapValues(a, b) {

// }

// function sortAlphabets(arrayAlphabet) {
//   let joinArrayStringValues = arrayAlphabet.join();

//   let string = "";

//   for (let i = 0; i < arrayAlphabet.length; i++) {
//     if()

//   }
// }

// 97 --> a 122 -->z

const stringArray = ["d", "e", "f", "a"];

/*4.Write a program that takes an array of numbers as input and removes all duplicates.
[a,a,b,d,e,e,f] -> [a,b,d,e,f] */

/* 

*/
console.log("Q4. Remove duplicate numbers in an array:");

const arrayWithDuplicates = ["a", "a", "b", "c", "c", "d", "e", "e", "f"];

let emptyArray = [arrayWithDuplicates[0]];

// console.log(emptyArray);

// console.log(!emptyArray.includes("j"));

// emptyArray.push(arrayWithDuplicates[2]);

// console.log(emptyArray);

function arrayWithoutDuplicates(arrayWithDuplicates) {
  for (let i = 0; i < arrayWithDuplicates.length; i++) {
    if (!emptyArray.includes(arrayWithDuplicates[i])) {
      emptyArray.push(arrayWithDuplicates[i]);
    }
  }
  return emptyArray;
}

console.log(arrayWithoutDuplicates(arrayWithDuplicates));

/* 5. Write a program that takes an array of numbers as input and returns a new array with only the even numbers.
[1,2,3,4,5,6,7,8,9] -> [2,4,6,8]

*/

console.log("Q5. Filter even numbers in an array:");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = arr.filter((arrElement) => {
  return arrElement % 2 === 0;
});

console.log(evenNumbers);

console.clear();
