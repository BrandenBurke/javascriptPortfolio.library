
//The syntax that we used before is called a Function Declaration:

function sayHi() {
    alert( "Hello" );
  }



//There is another syntax for creating a function that is called a Function Expression (function expression).

let sayHi = function() {
    alert( "Hello" );
  };


//We can copy a function to another variable:

function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)
  




  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);





/* Arrow Functions


There’s one more very simple and concise syntax for creating functions, that’s often better than Function Expressions. It’s called “arrow functions”, because it looks like this:
*/

let func = (arg1, arg2, ...argN) => expression

//In other words, it’s roughly the same as:

let func = function(arg1, arg2, ...argN) {
    return expression;
  };



