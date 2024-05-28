function isPangram(string){
  let letters = string.split("");
  let alphArr = [];
  console.log(letters)
  letters.forEach( letter => {
    if(!alphArr.includes(letter.toLowerCase()) && letter.match(/[a-z]/i)) {
      alphArr.push(letter.toLowerCase());
      console.log(alphArr);
    }
  });
  if(alphArr.length===26) {
    return true;
  }
  return false;
}
