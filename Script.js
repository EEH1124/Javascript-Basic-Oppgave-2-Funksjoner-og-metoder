//Oppgave 1 Functions and Methods:

function checkNumber(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Oppgave 2

const toUpperCaseText = (text) => {
  // Convert input text to uppercase and append an exclamation mark
  return text.toUpperCase() + "!";
};

// Example usage of toUpperCaseText
console.log(toUpperCaseText("This is cool")); // "THIS IS COOL!"
console.log(toUpperCaseText("Hello world")); // "HELLO WORLD!"
console.log(toUpperCaseText("Javascript is hard")); // "JAVASCRIPT IS HARD!"

// Task 3: Return a greeting based on the time of day
const greeting = (name, hour) =>
  hour < 0 || hour > 23
    ? "Invalid time"
    : hour <= 5
    ? `Good night ${name}`
    : hour <= 11
    ? `Good morning ${name}`
    : hour <= 17
    ? `Good afternoon ${name}`
    : `Good evening ${name}`;

// Example usage of greeting
console.log(greeting("Elvis", 10)); // "Good morning Elvis"
console.log(greeting("Tina", 20)); // "Good evening Tina"
console.log(greeting("Collins", -3)); // "Invalid time"
console.log(greeting("Mike", 23)); // "Good evening Mike"

// Task 4: Remove the first and last element in an array
const removeEdges = (array) => {
  // Remove first and last element using slice
  return array.slice(1, -1);
};

// Example usage of removeEdges
console.log(removeEdges(["Red", "Green", "Blue", "Yellow"])); // ["Green", "Blue"]
console.log(removeEdges(["One", "Two", "Three"])); // ["Two"]

// Task 5: Replace "difficult" with "fun" and trim whitespace
const modifyText = (text) => {
  // Trim whitespace and replace "difficult" with "fun"
  return text.trim().replace("difficult", "fun");
};

// Example usage of modifyText
console.log(modifyText("  Javascript is difficult   ")); // "Javascript is fun"
console.log(modifyText(" difficult difficult difficult ")); // "fun fun fun"

// Task 6: Manipulate "items" array
const items = ["Book", "Pen", "Notebook", "Eraser", "Pencil", "Marker"];

// Step 1: Remove the first element
items.shift();

// Step 2: Replace "Eraser" with "Ruler"
const indexEraser = items.indexOf("Eraser");
if (indexEraser !== -1) items[indexEraser] = "Ruler";

// Step 3: Remove "Pen" and "Notebook", add "Highlighter"
items.splice(0, 2, "Highlighter");

// Step 4: Combine array into a string with " | " as a separator
const itemsString = items.join(" | ");

// Extra: Filter out elements containing the letter "e"
const filteredItems = items.filter((item) => item.includes("e"));

// Example usage of items
console.log(itemsString); // "Highlighter | Ruler | Pencil | Marker"
console.log(filteredItems); // Array with elements containing "e"
