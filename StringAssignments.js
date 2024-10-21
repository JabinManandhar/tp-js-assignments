// String Manipulation:

/* 
Write a program that takes a string as input and converts it to uppercase.
apple -> APPLE

Write a program that takes a string as input and counts the number of words in it.
Apple -> 5

Write a program that takes a string as input and reverses it.
Apple -> elppA

Write a program that checks if a given string is a palindrome.
Level is palindrome

Write a program that takes a string as input and removes all the vowels from it.
Apple -> ppl


*/

/* 1. Write a program that takes a string as input and converts it to uppercase.
apple -> APPLE
 */

const string = "Apple";

function returnUpperCase() {
  return string.toUpperCase();
}

console.log(returnUpperCase());

/* 2. Write a program that takes a string as input and counts the number of letters in it.
Apple -> 5
*/

function countLetters(str) {
  return `The length of the given string "${str}" is ${str.length}`;
  // return str.trim().length;
}

console.log(countLetters("A for Apple"));

/* 3. Write a program that takes a string as input and reverses it.
Apple -> elppA
*/

const string3= "Apple";
function reverseLetters(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
    // console.log(str, reverse);
  }
  return reverse;
}
console.log(`The reverse of the given letter "${string3}" is:`);
console.log(reverseLetters(string3));

// USING SPLIT REVERSE AND JOIN ARRAY METHODS

/* function reverseString(str) {
  // console.log(str.split(""));
  return str.split("").reverse().join("");
}

console.log(reverseString("Apple"));
 */
/* 4. Write a program that checks if a given string is a palindrome.
Level is palindrome
 */

function isPalindrome(str) {
  str = str.toUpperCase();
  return str === reverseLetters(str.toUpperCase())
    ? `${str} is palindrome`
    : `${str} is not a palindrome`;
}

console.log(isPalindrome("level"));

/* 5. Write a program that takes a string as input and removes all the vowels from it.
Apple -> ppl */

// METHOD 2: Using replaceAll method

/* function removeAllVowels(str) {
  return str
    .replaceAll("A", "")
    .replaceAll("E", "")
    .replaceAll("I", "")
    .replaceAll("O", "")
    .replaceAll("U", "")
    .replaceAll("a", "")
    .replaceAll("e", "")
    .replaceAll("i", "")
    .replaceAll("o", "")
    .replaceAll("u", "");
}

console.log(removeAllVowels("Art")); */
