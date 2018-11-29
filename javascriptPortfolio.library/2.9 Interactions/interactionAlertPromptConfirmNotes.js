// Alert!

alert(message);

//This shows a message and pauses the script execution until the user presses “OK”.

alert("Hello");

/*
    The mini-window with the message is called a modal window. The word “modal” 
means that the visitor can’t interact with the rest of the page, press other 
buttons etc, until they have dealt with the window. In this case – until 
they press “OK”.
*/






// Prompt!

/*Function prompt accepts two arguments:

result = prompt(title[, default]);

It shows a modal window with a text message, an input field for the 
visitor and buttons OK/CANCEL.

The visitor may type something in the prompt input field and press 
OK. Or they can cancel the input by pressing the CANCEL button or hitting the Esc key.

The call to prompt returns the text from the field or null if the input was canceled.
*/

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!






// Confirm!

result = confirm(question);

/*Function confirm shows a modal window with a question and two buttons: OK and CANCEL.
Function confirm shows a modal window with a question and two buttons: OK and CANCEL.
*/

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

















