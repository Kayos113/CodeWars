function topThreeWords(text) {
  let newText = text.split(/[^a-zA-Z0-9]+/g);
  let charArr = [];
  newText.map( char => {if(!charArr.includes(char)) charArr.push(char)});
  let countArr = [];
  charArr.forEach( char => countArr.push( newText.filter( i => i==char ).length ) );
  console.log(charArr);
  console.log(countArr);
}
