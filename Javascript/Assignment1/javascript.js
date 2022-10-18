/* WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!
All the assignment instructions are commented out so that you can write your code in between them.
Remember to read the instructions CAREFULLY, write short comments for your code,
and feel free to ask for help if you're stuck.

PS: the extra challenges at the end are optional and not required.

******** GOOD LUCK! *********/

/* ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.
<-- Locate the index.html file in the file browser and link it to this file, javascript.js */

/* ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the various data types.
Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords */

// const user = "Redleader";
// const uAge = "30";
// const hiUser = "Do you copy";
// const ask = " Red Three standing by";
// const msgUser = hiUser + " " + user + "?" + ask + "!";
// let redLeader = false;

// if (user != "" && user === "Redleader") {
//   let redLeader = true;
//   console.log(msgUser);
// } else {
//   console.log("Cut the chatter, Red 2. Accelerate to attack speed");
// }

/* ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=) */

/* ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks whether username is empty, 
that the user age is 18+, and that the userIsBlocked is false. If all of these 
conditions are true, set the userIsLoggedIn to true and goToPage to "/home" 
then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly */

const userName = "Joe";
const userAge = 18;
const log = console.log;
const log1 = console.log("Welcome glorious leader");
const get = document.getElementById("assigned");
let userIsLoggedIn = false;
let userIsBlocked = false;
let userIsAdmin = false;
let goToPage = "";

if (userName === "Joe" && userAge >= 18) {
  userIsAdmin = true;
  goToPage = "/admin";
  log;
  get.innerText = "Hello Glorious Leader";
} else if (userName && userAge >= 18 && !userIsBlocked) {
  goToPage = "/home";
  log("Please log in User");
  get.innerText = "Please log in User";
} else {
  log("Ah ah ah you didn't say the magic word");
  get = "Ah ah ah you didn't say the magic word";
}
