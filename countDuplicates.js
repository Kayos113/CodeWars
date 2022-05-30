// given string, case non sensitive
// return a count of letters that occur more than once

function duplicateCount(text){
  // character array, int array - [character, count] pair between the two arrays
  // loop, length of text
  // check if character at current position is in character array
  //    if so, increment the int array to count the number of instances of that character
  //    otherwise push the character to the char array and creat a new index in the int array set to 1 as the new count
  // exit loop
  // int count
  // loop through int array, if current int>1, increment count.
  // return count
  let str = text.toLowerCase();
  let charArr = [];
  let intArr = [];
  let count = 0;
  for(let i=0; i<str.length; i++) {
    if(charArr.includes(str.charAt(i))) {
      intArr[charArr.indexOf(str.charAt(i))]+=1;
      if(intArr[charArr.indexOf(str.charAt(i))]===2) { //this conditional means each character will only be counted as a duplicate the first time it repeats, allowing for an acurate count without a second loop
        count++;
      }
    } else {
      charArr.push(str.charAt(i));
      intArr.push(1);
    }
  }
  return count;
}
