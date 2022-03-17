function incrementString (strng) {
  let index = strng.length;
  while(!isNaN(parseInt(strng.substring(index-1))) && index>0 ) {
    index--;
  }
  let subString = strng.substring(0,index);
  let num = (parseInt(strng.substring(index))+1);
  let numString = !isNaN(num) ? num+'' : '1';
  let zeros = '';
  while(subString.length+numString.length+zeros.length<strng.length) {
    zeros+='0';
  }
  return subString+zeros+numString;
}
