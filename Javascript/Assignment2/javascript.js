// Functions and Methods assignment
// Read the assignment text CAREFULLY

/*
1. CHECK

Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax.

Console log the function call a few times with both even and odd numbers to
show that it's working.
*/
const number = 19;

if (number % 2 == 0) {
  console.log("The number is even, Steven!");
} else {
  console.log("The number is very odd, Odd!");
}

/*
2.

Write a function that takes in a string as a parameter and returns the string in upper
case with an exclamation mark at the end. Use the non-arrow function syntax (function keyword).

Example: console.log(yourFunction("this is cool")) should console log THIS IS COOL!
Console log the function a few times to show that it's working.
*/

const array = "i'm a little teapot short and stout";

function upperCase() {
  return array.toUpperCase();
}

console.log(upperCase());
/*



3.

Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working.
*/

const name = "Glorious User";
const timeOfDay = 12;
const night = console.log('Good morning ${name}');    // Good morning (name received)" if the hour received is 6-12
const morning = console.log('Good morning ${name}');  // Good morning (name received)" if the hour received is 6-12
const day = console.log('Good day ${name}')           // Good day (name received)" if the hour received is 12-18
const evening = console.log('Good evening ${name}')   // Good evening (name received)" if the hour received is 18-24
const invalid = console.log('Invalid time, ${name}')  // Invalid time" if the hour received is greater than 24

function greeting() {
  timeOfDay < 6 ? night :
  timeOfDay < 12 ? morning :
  timeOfDay < 18 ? day :
  timeOfDay < 24 ? evening :
  timeOfDay > 24 ? invalid:
}

/*
4.

Use string methods on the text variable to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 - Split the string into an array where each word is an element

 Console log each method used.
*/
const text = "  Javascript is hard   ";
const split = text.split(" ");
const textArray = ["Javascript", "is", "hard", "fun", "amazing"];

console.log(text.replace("hard", "FUNTIMES"));
console.log(text.slice(2, 21));
console.log(text.trim().split(" "));
console.log(text.replace("hard", "FUNTIMES").trim().split(" "));
/*
5.

Use array methods to do the following:
 - Add a new hero to the end of the array
 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Thanos"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
*/

const marvelHeroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
];
// Add Groot into the array
const pushHero = "Groot";
marvelHeroes.push(pushHero);
console.log(marvelHeroes);

// Remove Spideywidey
marvelHeroes.splice(marvelHeroes, 1);
console.log(marvelHeroes);

// Replace Doc Strange with Thanos
marvelHeroes.splice(3, 1);
marvelHeroes.push("Thanos");
console.log(marvelHeroes);

/*
5.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/
