function findOutlier(integers){
  let count = [0,0];
  for(let i=0; i<3; i++) {
    count[integers[i]%2]++;
  }
  let modTarget = count[0]>1 ? 1 : 0;  //sets whether we are looking for odd or even values. Greater than 1 in count[0] means there are more evens than odds in this array so we need to look for a value where %2=1, hence making modTarget1
  let index;
  integers.forEach( (int, i) => {
    if(Math.abs(int%2)==modTarget) {
      index = i;
    }
  });
  return integers[index];
}
