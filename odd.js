// Using the modulo operator
// write a function called odd that takes in an integer
// and returns (not console.log) a boolean

// Write your function below
const odd = int => {
    if(int % 2 != 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(odd(3)) // => true
  console.log(odd(4)) // => false 
