var isPP = function(n){
  let returnArr = [2,2]
  while(returnArr[0] <= Math.sqrt(n)+1) {
    while( getPower(returnArr) < n ) {
      returnArr[1]++;
    }
    if( getPower(returnArr) == n ) {
      return returnArr;
    }
    returnArr[0]++;
    returnArr[1]=2;
  }
  return null;
}

function getPower(arr) {
  return Math.pow(arr[0],arr[1]);
}
