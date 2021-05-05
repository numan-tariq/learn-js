/* reference types
    - Object
        * use curly braces { } Object Literal
        read values through
        * Dot Notation
        * Bracket Notation
        
    - Arrays
        * use Square braces [ ] Array Literal
        read values through
        * Bracket Notation with indexes

    - Functions

*/

// Object
let person = {
    name: 'Your Name',
    age: 'Your Age'
};

// Dot Notation
console.log(person.name); // Name
console.log(person.age); // Age

// Bracket Notation
console.log(person['name']); // Name
console.log(person['age']); // Age

// Array
let colors = ['Black', 'Yellow', 'Red'];
console.log(colors); 
         // [ 'Black', 'Yellow', 'Red' ]
// Indexes       0        1        2

console.log(colors[0]); // Black
console.log(colors[1]); // Yellow
console.log(colors[2]); // Red

// Functions
function getColor() {
    console.log('RED');
}

getColor();