/*
    The point of this exercsise is to take an array in a function and return the sum of
    only the positive numbers. Any negative numbers should be skipped.
*/


function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i<arr.length; i++) {
    if(arr[i]>0) sum += arr[i];
  }
  return sum;
}

/*
  While there are ways to do this "smarter" I believe this is best practice because to use
  reduce or filter to reduce this to one line would reduce the readability of this function.
  The only way I could think to improce this is to add a comment beside each line
  describing what each line is doing.  
*/
