// synchronous
// run top to bottom
let name = 'Name';
console.log(name);
console.log('synchronous');


// asynchronous
// run top to bottom but you can manage which thing happens at first
setTimeout(() => {
    console.log('asynchronous');
}, 1000);

let age = 12;
console.log(age);
