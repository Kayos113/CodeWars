/* 8 kyu, warm up speed round

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

function countPositivesSumNegatives(input) {
  if(input==null) return []; //catch the null input edge case
  let ret = [0,0]; //left/0 counts positive elements, right/1 sums negatives
  input.forEach( el => {
    let func = el==0 ? null : (el>0 ? 0 : 1); // if el is 0, return null, else return 0 is positive and 1 if negative
    if(func==0) ret[0]++;
    else ret[1]+=el;
  });
  if(ret[0]==0&&ret[1]==0) ret=[]; // catch the double zero edge case, which should return an empty array
  return ret;
}
