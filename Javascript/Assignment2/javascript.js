// Functions and Methods assignment
// Read the assignment text CAREFULLY

/*
1.

Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax.

Console log the function call a few times with both even and odd numbers to
show that it's working.
*/

const oddOrEven = (number) => (number % 2 === 0 ? "Even" : "Odd");
console.log(oddOrEven(16));

/*
2.

Write a function that takes in a string as a parameter and returns the string in upper
case with an exclamation mark at the end. Use the non-arrow function syntax (function keyword).

Example: console.log(yourFunction("this is cool")) should console log THIS IS COOL!
Console log the function a few times to show that it's working.
*/

function upperCase(string) {
  return string.toUpperCase() + "!";
}
console.log(upperCase("i want to be uppercase when i grow up"));

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

const name = "Endre";
const timeOfDay = 21;
const night = `Good night ${name}`;
const morning = `Good morning ${name}`;
const day = `Good day ${name}`;
const evening = `Good evening ${name}`;
const invalid = `Invalid time, please come back from the future ${name}.`;

const greeting = () =>
  timeOfDay <= 6
    ? night
    : timeOfDay <= 12
    ? morning
    : timeOfDay <= 18
    ? day
    : timeOfDay <= 24
    ? evening
    : invalid;

console.log(greeting());

// I am master if ternary! (Not really, but learning! :) )
/*
4.

Use string methods on the text variable to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 - Split the string into an array where each word is an element

 Console log each method used. */

const text = "  Javascript is hard   ";
const split = text.split(" ");

console.log(text.replace("hard", "FUNTIMES"));
console.log(text.slice(2, 21));
console.log(text.trim().split(" "));

// // ALL TOGETHER NOW
console.log(text.replace("hard", "FUNTIMES").trim().split(" "));
// // This could also be :
alt = text.replace("hard", "FUNTIMES").trim().split(" "));
console.log(alt())

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
//Add Groot into the array
const pushHero = "Groot";
marvelHeroes.push(pushHero);
console.log(marvelHeroes);

// // Remove Spideywidey
marvelHeroes.splice(marvelHeroes, 1);
console.log(marvelHeroes);

// Replace Doc Strange with Thanos
// This needed some serious googling! But I hope this is satisfactory! :)
const index = marvelHeroes.indexOf("Doctor Strange");
marvelHeroes.splice(index, 1, "Thanos");
console.log(marvelHeroes);

// Remove Thor and Hulk, and replaced with Captain America
const index = marvelHeroes.indexOf("Thor", "Hulk");
marvelHeroes.splice(index, 2, "Captain America");
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
