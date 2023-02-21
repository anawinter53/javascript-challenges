// complete the function swapcase that takes in a word and returns a swapcased string
// the lowercase letters will be uppercased and vice versa

// Complete the function below
const swapcase = (word) => {
    let new_word = ""
    for (let i = 0; i < word.length; i++) {
        let character = word[i];
        if (character == character.toUpperCase()) {
            character = character.toLowerCase();
        } else {
            character = character.toUpperCase();
        }
        new_word = new_word + character
    }
    
    return new_word
  }
  
  
  
  console.log(swapcase("hELLo")) // "HellO"
  console.log(swapcase("betH")) // "BETh"
  console.log(swapcase("jaGaN")) // "JAgAn"
  console.log(swapcase("sergI")) // "SERGi"
