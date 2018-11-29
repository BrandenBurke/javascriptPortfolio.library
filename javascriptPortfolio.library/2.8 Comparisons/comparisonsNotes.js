/* Comparisons

Many comparison operators we know from maths:

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equality check is written as a == b (please note the double equation sign =. A single symbol a = b would mean an assignment).
Not equals. In maths the notation is ≠, in JavaScript it’s written as an assignment with an exclamation sign before it: a != b.
*/

/* Boolean is the result

Just as all other operators, a comparison returns a value. The value is of the boolean type.

true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “a lie”.
*/

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

//A comparison result can be assigned to a variable, just like any value:

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true


/* String Comparison

To see which string is greater than the other, the so-called “dictionary” or “lexicographical” order is used.

In other words, strings are compared letter-by-letter.
*/

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true


/* Comparison of different types

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
*/

//For boolean values, true becomes 1 and false becomes 0, that’s why:

alert( true == 1 ); // true
alert( false == 0 ); // true

// A funny consequence

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!


//Strict Equality

alert( 0 == false ); // true

alert( '' == false ); // true

alert( 0 === false ); // false, because the types are different

// Null and Undefined

alert( null === undefined ); // false

alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true























