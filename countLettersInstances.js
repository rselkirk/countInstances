<<<<<<< HEAD
// func to count letters and return obj


=======
/ func to count letters and return obj
>>>>>>> e87cf3f3d28467f43c264a4f69fa34414b67bd9e

function countLetters(sentence) {
 // get rid of the spaces
 //  go through the char of the string
var lettersCount = {};
for (var i = 0; i < sentence.length; i++) {
  var currentChar = sentence[i];
    if (currentChar !== " ") {
      if (currentChar in lettersCount) {
      // push to the object
        lettersCount[currentChar].push(i);
      }
      else {
        lettersCount[currentChar] = [i];
      }
    }
  }
return lettersCount
}
var output = countLetters("lighthouse in the house");
console.log(output);

// console.log(countLetters(“lighthouse in the house “))
