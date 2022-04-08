String.prototype.camelCase=function(){
  let words = this.split(" ");
  let returnString = "";
  words.forEach( word => {
    if(word.length>0) {
      returnString += word[0].toUpperCase() + word.substring(1);
    }
  });
  return returnString;
}
