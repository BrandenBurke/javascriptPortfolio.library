/* Operand

An operand – is what operators are applied to. For instance in multiplication 5 * 2 there are two operands: the left operand is 5, and the right operand is 2. Sometimes people say “arguments” instead of “operands”.

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of the number:
*/


let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied


//An operator is binary if it has two operands. The same minus exists in the binary form as well:

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values


/*Strings concatenation, binary +


Strings concatenation, binary +
Now let’s see special features of JavaScript operators that are beyond school arithmetics.

Usually the plus operator + sums numbers.

But if the binary + is applied to strings, it merges (concatenates) them:
*/

let s = "my" + "string";
alert(s); // mystring

//Note that if any of the operands is a string, then the other one is converted to a string too.

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

//However, note that operations run from left to right. If there are two numbers followed by a string, the numbers will be added before being converted to a string:

alert(2 + 2 + '1' ); // "41" and not "221"

//String concatenation and conversion is a special feature of the binary plus +. Other arithmetic operators work only with numbers. They always convert their operands to numbers.

alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3




/* Remander%

The remainder operator % despite its look does not have a relation to percents.

The result of a % b is the remainder of the integer division of a by b.

For instance:
*/

alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2
alert( 8 % 3 ); // 2 is a remainder of 8 divided by 3
alert( 6 % 3 ); // 0 is a remainder of 6 divided by 3

//Exponentiation**
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

/* Increment(++)/Decrement(--)

Important!
Increment/decrement can be applied only to a variable. An attempt to use it on a value like 5++ will give an error.
*/

let counter = 1;
alert( 2 * ++counter ); // 4


let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value


let counter = 1;
alert( 2 * counter );
counter++;




/* Bitwise Operators

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/

let n = 2;
n = n + 5;
n = n * 2;


let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

/*Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -= etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:
*/

let n = 2;

n *= 3 + 5;

alert( n ); // 16  (right part evaluated first, same as n *= 8)


/* The comma operator , is one of most rare and unusual operators. Sometimes it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated, but the result of only the last one is returned.
*/

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

//Here, the first expression 1 + 2 is evaluated, and its result is thrown away, then 3 + 4 is evaluated and returned as the result.

//comma has a very low precedence
