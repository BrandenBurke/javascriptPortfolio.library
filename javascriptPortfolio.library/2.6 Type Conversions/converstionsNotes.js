// Type Conversions

/*Most of the time, operators and functions automatically convert a value to the right type. That’s called “type conversion”.

For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

There are also cases when we need to explicitly convert a value to put things right.
*/



/* ToString

String conversion happens when we need the string form of a value.

For example, alert(value) does it to show the value.

We can also use a call String(value) function for that:
*/



/* ToNumber

Numeric conversion happens in mathematical functions and expressions automatically.

For example, when division / is applied to non-numbers:
*/



/* ToBoolean

Boolean conversion is the simplest one.

It happens in logical operations (later we’ll meet condition tests and other kinds of them), but also can be performed manually with the call of Boolean(value).

The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined and NaN become false.
Other values become true.
*/














