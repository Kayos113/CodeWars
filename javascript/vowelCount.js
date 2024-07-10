/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let count=0;
  str.split("").forEach( char => count+=isVowel(char));
  return count;
}

function isVowel(char) {
  switch(char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return 1;
      default: return 0;
  }
}
