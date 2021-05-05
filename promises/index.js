/* Promises
    - use to handle asynchronous oeprations
*/

// Example 1
let done = true;
let jsCoursePromise = new Promise((resolve, reject) => {
    if(done) {
        resolve('Congratulations!!');
    } else {
        reject('Keep going!');
    }
})

jsCoursePromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})

// Example 2
let status = 200;
let statusPromise = new Promise((resolve, reject) => {
    if(status == 200) {
        resolve('Everything Fine');
    } else {
        reject('Bad Request');
    }
})

statusPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})