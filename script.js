// For question one

let age = prompt(“Enter your age:”);
if (age >= 18) {
    console.log("you are old enough to drive.")
} else{
    let yearsLeft = 18 - age;
    console.log(`you are left with ${yearsLeft} years to drive.`)
}



// for question two

let myAge = 25;
let yourAge = prompt('Enter your age:');

if (yourAge > myAge) {
    let diff = yourAge - myAge;
    console.log(`you are ${diff} years older than ma.`);
} else if ( yourAge < myAge) {
    let diff = myAge - yourAge;
    console.log(`I am ${diff} years older than you.`);
} else{
    console.log("We are the same age!.");
}


// For question three

// Using if else method
let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else{
    console.log(`${a} is less than ${b}`);
}

// Using Ternary Operator
let c = 4;
let d = 3;
console.log(
    c > d ? c + " is greater than " + d : c + "is less than" + d
)


// For question four

let number = prompt("Enter a number:");

if (number % 2 === 0) {
  console.log(number + " is an even number.");
} else {
  console.log(number + " is an odd number.");
}


// For question five

let month = prompt("Enter a month:");
month = month.toLowerCase(); // make everything lowercase

if (month === "september" || month === "october" || month === "november") {
  console.log("The season is Autumn.");
} else if (month === "december" || month === "january" || month === "february") {
  console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month. Please enter a valid month name.");
}


// For question six

let day = prompt("What is the day today?");
day = day.toLowerCase(); // Make everything small letters

switch (day) {
  case "saturday":
  case "sunday":
    console.log(capitalize(day) + " is a weekend.");
    break;

  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(capitalize(day) + " is a working day.");
    break;

  default:
    console.log("Invalid day. Please enter a real day name.");
}