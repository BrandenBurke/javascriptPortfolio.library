/*A variable is a “named storage” for data. We can use variables to store goodies, visitors and other data.

To create a variable in JavaScript, we need to use the let keyword.

The statement below creates (in other words: declares or defines) a variable with the name “message”:
*/

let message;

//Now we can put some data into it by using the assignment operator =

let message;

message = 'Hello'; //stores the string

/*The string is now saved into the memory area associated with the variable. We can access it using the variable name:
*/

let message;
message = 'Hello!';

alert(message); // shows the variable content

/*o be concise we can merge the variable declaration and assignment into a single line:
*/

let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!

//We can also declare multiple variables in one line; however this is not recommended (use only one variable per line).

//var is an older version of let

//When naming variables use camelCase myVeryLongName

/*(Constants) To declare a constant (unchanging) variable, one can use const instead of let:
*/

const myBirthday = '18.04.1982';

//This can no longer be done:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

//Constants should be totally upper cased to eliminate accidental attempts at changing the constants. 

/* SUMMARY

We can declare variables to store data. That can be done using var or let or const.

let – is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside
*/



























