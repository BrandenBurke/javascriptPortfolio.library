//Conditional operators: if, '?'

/*The “if” statement

The if statement gets a condition, evaluates it and, if the result is true, executes the code.
*/

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );


/*
In the example above, the condition is a simple equality check: year == 2015, but it can be much more complex.

If there is more than one statement to be executed, we have to wrap our code block inside curly braces:
*/

if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
  }

/*
It is recommended to wrap your code block with curly braces {} every time with if, even if there is only one statement. That improves readability.
*/


/*Boolean conversion

The if (…) statement evaluates the expression in parentheses and converts it to the boolean type.

Let’s recall the conversion rules from the chapter Type Conversions:

A number 0, an empty string "", null, undefined and NaN become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.
So, the code under this condition would never execute:
*/

if (0) { // 0 is falsy

  }

//And inside this condition – always works:

if (1) { // 1 is truthy
    
  }

//We can also pass a pre-evaluated boolean value to if, like here:

let cond = (year == 2015); // equality evaluates to true or false

if (cond) {

}

/* The “else” clause

The if statement may contain an optional “else” block. It executes when the condition is wrong.

let year = prompt('In which year was ECMAScript-2015 specification published?', '');
*/

/* else if

Sometimes we’d like to test several variants of a condition. There is an else if clause for that.
*/

/* Ternary Operator '?'

The so-called “ternary” or “question mark” operator lets us do that shorter and simpler.

The operator is represented by a question mark ?. The formal term “ternary” means that the operator has three operands. It is actually the one and only operator in JavaScript which has that many.
*/

let result = condition ? value1 : value2










