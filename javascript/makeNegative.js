function makeNegative(num) {
  if(num<0) return num;
  else return num*-1;
}

/*
* A clever answer would be to replace lines 2 & 3 with:
    return -Math.abs(num);
*
*/
