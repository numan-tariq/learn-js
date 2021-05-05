/* Generator Functions
    - function keyword followed by an asterisk
    - returns a Generator object (yield)
*/

function* getName(firstName, lastName) {
    firstName = 'Visual';
    yield firstName;
    lastName = 'Studio';
    yield lastName;
    return 'returned';
}

let name = getName();
console.log(name.next().value); // return only first yield = Visual
console.log(name.next().value); // return second yield = Studio
