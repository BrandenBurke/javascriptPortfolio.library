/*
A switch statement can replace multiple if checks.

It gives a more descriptive way to compare a value with multiple variants.

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
  }
*/





// An Example:

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}


/*
Here the switch starts to compare a from the first case variant that is 3. The match fails.

Then 4. That’s a match, so the execution starts from case 4 until the nearest break.

If there is no break then the execution continues with the next case without any checks.
*/




let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3:                    // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}







let arg = prompt("Enter a value?")
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' )
}


/*
For 0, 1, the first alert runs.
For 2 the second alert runs.
But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.
*/



