function narcissistic(value) {
  let values = (""+value).split("");
  let digits = values.length;
  let sum = 0;
  values.forEach( num => {
    sum += Math.pow(num,digits);
  });
  return value === sum;
}
