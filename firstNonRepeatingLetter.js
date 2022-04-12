function firstNonRepeatingLetter(str) {
  let doubleChars = [];
  let currChar;
  for(let i=0; i<=str.length; i++) {
    currChar = str.charAt(i);
    if(str.substring(i+1).indexOf(currChar)==-1 && ! doubleChars.includes(currChar)) {
      return currChar;
    } else if(!doubleChars.includes(currChar)) {
      doubleChars.push(currChar);
    }
  }
}
