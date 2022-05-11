function createPhoneNumber(numbers){
  if(numbers.length!=10) {
    return "INVALID ARRAY FORMAT. TRY AGAIN."
  }
  let returnString = "(";
  for(let i=0; i<numbers.length; i++) {
    returnString += numbers[i];
    if(i===2) { //after the third number
      returnString += ") ";
    } else if(i===5) { //after the sixth number
      returnString += "-";
    }
  }
  return returnString;
}
