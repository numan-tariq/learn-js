/* Immediately invoked function expression (IIFE)
    - function that runs as soon as it is defined
*/

// Example 1
(() => {
    console.log('Currently coding on VS Code!')
})();

// Example 2
(codingOn = (software = 'VS') => {
    console.log(`Currently coding on ${software}!`)
})();

// Useful ouside the IIFE
codingOn('JetBrains');