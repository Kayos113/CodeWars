function topThreeWords(text) {
  let newText = text.split(/[^a-zA-Z0-9]+/g);
  let charArr = [];
  newText.map( char => {if(!charArr.includes(char)) charArr.push(char)});
  charArr.sort( (a,b) => {
    let codeA = a.charCodeAt(0);
    let codeB = b.charCodeAt(0);
    if(codeA<97) {
      codeA+=33;
    }
    if(codeB<97) {
      codeB+=33;
    }
    return codeA>codeB;
  });
  let countArr = []
  charArr.forEach( char => countArr.push( newText.filter( i => i==char ).length ) );
  let topThree = [0,0,0];
  countArr.forEach ( count => {
    if(count > topThree[2]) {
      topThree.pop();
      topThree.push(count);
      topThree.sort( (a,b) => a<b );
    }
  });
  console.log(charArr);
  console.log(countArr);
  console.log(topThree);
  let returnArr = [];
  topThree.forEach( count => {
    if(count>0) {
      returnArr.push( charArr[countArr.indexOf(count)] );
      countArr[countArr.indexOf(count)] = -1; //mark that we have taken this element
    }
  })
  return returnArr;
}
