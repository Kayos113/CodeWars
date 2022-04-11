function firstNonRepeatingLetter(str) {
  let doubleChars = [];
  let currChar;
  let lwrstr = str.toLowerCase();
  for(let i=0; i<=str.length; i++) {
    currChar = lwrstr.charAt(i);
    if(lwrstr.substring(i+1).indexOf(currChar)==-1 && ! doubleChars.includes(currChar)) {
      return str.charAt(i);
    } else if(!doubleChars.includes(currChar)) {
      doubleChars.push(currChar);
    }
  }
  return '';
}
