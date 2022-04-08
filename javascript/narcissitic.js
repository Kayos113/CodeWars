function narcissistic(value) {
  let nDigits = 0;
  let temp = value;
  while(temp>0) {
    temp=Math.floor(temp/10);
    nDigits++;
  }
  let sum = 0;
  for(let i=value; i>0; i=Math.floor(i/10)) {
    sum += Math.pow((i%10),nDigits);
  }
  if(sum===value) {
    return true;
  }
  return false;
}
