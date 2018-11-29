alert('Hello'); alert('World');

//These two ways are the exact same; however, second is recommended to make code more readable. 

alert('Hello');
alert('World');

//A semicolon may be omitted in most cases when a line break exists.

alert('Hello')
alert('World')

//There are cases when a newline does not mean a semicolon, for example:

alert(3 +
 1
    + 2)

//The code outputs 6 because JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus then it is an incomplete expression. 

//The next few examples are common errors.

[1, 2].forEach(alert)

//correct way below

alert("All fine now");
[1, 2].forEach(alert);

//So, because the semicolon is not auto-inserted, the code in the first example is treated as a single statement. That’s how the engine sees it:

alert("There will be an error")[1, 2].forEach(alert)


/* An example with two messages.
This is a multiline comment.
*/

//Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.










