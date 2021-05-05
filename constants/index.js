/* 
    If you don't need to reassign, use 'const'
*/

// 'let' allow to change values
let name = 'Name';
console.log(name); // Print Name

name = 'anotherName';
console.log(name); // Print anotherName

// 'const' does not allow to change values
const name = 'Name';
console.log(name); // Print Name

name = 'anotherName'; // Error
console.log(name); 