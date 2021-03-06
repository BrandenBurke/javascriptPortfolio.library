// What are the results of these expressions?

"" + 1 + 0 // 1?
"" - 1 + 0// -1?
true + false// boolean?
6 / "3"// error?
"2" * "3"// 6?
4 + 5 + "px"// 9?
"$" + 4 + 5// 9?
"4" - 2// 2?
"4px" - 2// 2?
7 / 0// error, undefined?
"  -9\n" + 5// error?
"  -9\n" - 5// error?
null + 1// 1?
undefined + 1// 1?

// Answers

/*
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
" -9\n" + 5 = " -9\n5"
" -9\n" - 5 = -14
null + 1 = 1 // (3)
undefined + 1 = NaN // (4)
*/


/*
The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
null becomes 0 after the numeric conversion.
undefined becomes NaN after the numeric conversion.
*/





