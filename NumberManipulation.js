/* 
Number Manipulation:
Write a program that takes a number as input and checks if it is a prime number.
3 -> 3 is a prime number

Write a program that takes an array of numbers as input and returns the sum of all the numbers.
[1,2,3] -> 6

Write a program that takes a number as input and calculates its factorial.
4 -> 4*3*2*1 -> 24

Write a program that takes a number as input and checks if it is a perfect square.
4 -> 4 is a perfect square
16 -> 16 is a perfect square

Write a program that takes a number as input and checks if it is a Fibonacci number.
0,1,1,2,3,5,8….

*/

/* 1. Write a program that takes a number as input and checks if it is a prime number.
3 -> 3 is a prime number
*/

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      return `The given number ${num} is NOT prime`;
    }
  }
  return "The given number ${num} IS prime";
}

console.log(isPrime(9));

/* 2. Write a program that takes an array of numbers as input and returns the sum of all the numbers.
[1,2,3] -> 6
*/

// METHOD 1: USING FOR LOOP
const array = [1, 2, 3];

/* function sumNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log("The sum of the given array elements is:", sumNumbers(array)); */

// METHOD 2: USING ARRAY REDUCE METHOD

const sumOfNumbers = array.reduce((acc, currentValue) => {
  return acc + currentValue;
});

console.log("The sum of all the array elements is:", sumOfNumbers);

/* 3. Write a program that takes a number as input and calculates its factorial.
4 -> 4*3*2*1 -> 24
*/

/* METHOD 1: Using for loop*/

function factorial(num) {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(`The factorial of the given number is:`, factorial(5));

/* METHOD 2: Using recursion */

// function factorial(num) {
//   while (num !== 1) {
//     return factorial * factorial(num - 1);
//   }
// }

// console.log(factorial(4));

// console.log();

/* 4. Write a program that takes a number as input and checks if it is a perfect square.
4 -> 4 is a perfect square
16 -> 16 is a perfect square



1 Perfect Square
2 Not perfect square
3 Not perfect square
4 Perfect square, because 4=2*2
5 Not perfect square 

*/

function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  if (Number.isInteger(sqrt)) {
    console.log(`The given number ${num} is a perfect square`);
  } else {
    console.log(`The given number ${num} is not a perfect square`);
  }
}

isPerfectSquare(19);

/* 5. Write a program that takes a number as input and checks if it is a Fibonacci number.
0,1,1,2,3,5,8…. */

/* 
Return an array of number upto n fibonacci series
If that array contains the number, return TRUE 
*/

let a = [0, 1];
let init = a[0];
let nextItem = a[1];

function fib(n) {
  for (let i = 0; i < n; i++) {
    nextItem = a[i] + a[i + 1];
    a.push(nextItem);
  }
  console.log(a);
  return a.includes(n)
    ? console.log("The given number IS one of the Fibonacci numbers")
    : console.log("The given number IS NOT one of the Fibonacci numbers");
}

fib(9);
