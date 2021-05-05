/* There are two types of programming languages
    * Static
        - When declare a variable, if type of variable set, we can't change the type of variable type.
    * Dynamic   (JavaScript is dynamic language)
        - Type of variable can change at runtime.
*/

let name = 'Name';
console.log(typeof(name)); // 'String'

name = 123;
console.log(typeof(name)); // 'Number'