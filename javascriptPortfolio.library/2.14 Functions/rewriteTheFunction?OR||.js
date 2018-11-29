
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  }


/* ? (conditional) operator

The ?: operator can be used as a shortcut for an if...else statement. It is typically used as part of a larger expression where an if...else statement would be awkward. For example:
*/

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
  



  

// || (or) operator

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

















