function topThreeWords(text) {
  let newText = text.split(/[^a-zA-Z0-9]+/g);
  let charArr = [];
  newText.map( char => {if(!charArr.includes(char)) charArr.push(char)});
  let countArr = [];
  charArr.forEach( char => countArr.push( newText.filter( i => i==char ).length ) );
  //at this point there is now two arrays, one of each word that appears, and the other the count of the times that word appears, with mathing indecies

}
