function moveZeros(arr) {
  let returnArr = arr.filter( element => element!==0 );
  while(returnArr.length < arr.length) {
    returnArr.push(0);
  }
  return returnArr;
}
