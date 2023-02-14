// complete the function capitalize that takes in a word and returns a capitalised string

// Complete the function below
const capitalize = (word) => {
    let capitalizedFirstLetter = word.charAt(0).toUpperCase();
    let restOfWord = word.slice(1).toLowerCase();
    let capitalizedWord = capitalizedFirstLetter + restOfWord;

    // You will have to define the variable
    return capitalizedWord
  }
  
  
  console.log(capitalize("hELLo")) // => Hello
  console.log(capitalize("betH")) // => Beth
  console.log(capitalize("jaGaN")) // => Jagan
  console.log(capitalize("sergI")) // => Sergi
