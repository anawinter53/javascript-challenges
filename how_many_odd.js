// write a function called howManyOdds that takes in an integer and returns (not console.log) how many odd numbers are in the array 

// Write your function below

const howManyOdds = ar => {
    let oddNumbers = 0;
    for (let i = 0; i < ar.length; i ++) {
      if (ar[i] % 2 != 0) {
        oddNumbers += 1;
      }
    }
    return oddNumbers;
  }
  
  ar = [7, 19, 33, -5, -99, 6, 12]
  
  console.log(howManyOdds(ar)) // => 5                 
  