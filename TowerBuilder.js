function towerBuilder(nFloors) {
  let nChars = nFloors*2-1;
  let tempString = "";
  let arr = [];
  for(let i=0; i<nFloors; i++) {
    for(let char=0; char<nChars; char++) {
      if(char>=nFloors-i-1 && char<=nFloors+i-1) {
        tempString += "*";
      } else {
        tempString += " ";
      }
    }
    arr.push(tempString);
    tempString = "";
  }
  return arr;
}
