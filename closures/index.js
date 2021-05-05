/* Closures
    - Functions define inside the function
*/

function outerFunction() {
    console.log('OuterFunction');

    return function innerFunction() {
        console.log('InnerFunction');

        return function innerInnerFunction() {
            console.log('InnerInnerFunction');
        }
    }
}

outerFunction(); // run only outerFunction
outerFunction()(); // run outerFunction + innerFunction
outerFunction()()(); // run outerFunction + innerFunction  + innerInnerFunction