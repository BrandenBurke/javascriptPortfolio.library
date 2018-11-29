
/* FUNCTIONS

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
*/






/* Function Declaration

To create a function we can use a function declaration:
*/

function showMessage() {
    alert( 'Hello everyone!' );
  }







/* Local Variables

A variable declared inside a function is only visible inside that function.
*/

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function








  /* Outer Variables (Global Variables)

  A function can access an outer variable as well, for example:
  */

 let userName = 'John';

 function showMessage() {
   let message = 'Hello, ' + userName;
   alert(message);
 }
 
 showMessage(); // Hello, John
 








/* Parameters

We can pass arbitrary data to functions using parameters (also called function arguments) .

In the example below, the function has two parameters: from and text.
*/

function showMessage(from, text) { // arguments: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
  showMessage('Ann', "What's up?"); // Ann: What's up? (**)







/* Default Values

If a parameter is not provided, then its value becomes undefined.

For instance, the aforementioned function showMessage(from, text) can be called with a single argument:
*/

showMessage("Ann");




//If we want to use a “default” text in this case, then we can specify it after =:


function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given
  







/* Returning A Value

A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:
*/

function sum(a, b) {
    return a + b;
  }
  
  let result = sum(1, 2);
  alert( result ); // 3
  







/* Naming A Function

Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
*/








/* Functions == Comments

Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.
*/















