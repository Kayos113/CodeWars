/*
if a word has two of any character - false
if a word has only one of any character - true

params: String word, account for null case, ignore letter case
conditionals: if two characters in the word match one another
returns: true or false based on conditionals
*/

function isIsogram(str){
  //loop
  //have character array to store letters we have already passed in the loop
  //check if current letter being looked at is in character array
    //if so, the word is not an isogram, return false
    //otherwise continue the loop
  //place letters from word into a char array one at a time
  //if the loop finishes without returning false, the word has no doubles and is an isogram, return true

  let word = str.toLowerCase();
  let charArray = [];
  let currChar;
  for(let i=0; i<word.length; i++) {
    currChar = word.charAt(i);
    if(charArray.includes(currChar)) { // conditional. If true, not an isogram.
      return false;
    }
    charArray.push(currChar);
  }
  return true;
}
