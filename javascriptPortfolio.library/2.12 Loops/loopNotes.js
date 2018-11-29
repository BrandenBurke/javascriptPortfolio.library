
// "while" loop

while (condition) {
    // code
    // so-called "loop body"
  }


  let i = 0;
  while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
  }

/*
A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

If there were no i++ in the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and for server-side JavaScript we can kill the process.

Any expression or a variable can be a loop condition, not just a comparison. They are evaluated and converted to a boolean by while.

For instance, the shorter way to write while (i != 0) could be while (i):
*/


let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}

// do while loop

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);




// for loop

for (begin; condition; step) {
    // ... loop body ...
  }


for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}




// you can break loops, skip loops, and continue loops etc...















