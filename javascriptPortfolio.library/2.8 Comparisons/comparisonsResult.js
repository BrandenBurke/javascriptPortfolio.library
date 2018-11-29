5 > 4 // True?
"apple" > "pineapple" // False?
"2" > "12" // False?
undefined == null // False
undefined === null // True
null == "\n0\n" // ?
null === +"\n0\n" // ?

/* Answers:

5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
*/

/*
Some of the reasons:

Obviously, true.
Dictionary comparison, hence false.
Again, dictionary comparison, first char of "2" is greater than the first char of "1".
Values null and undefined equal each other only.
Strict equality is strict. Different types from both sides lead to false.
See (4).
Strict equality of different types.
*/




















