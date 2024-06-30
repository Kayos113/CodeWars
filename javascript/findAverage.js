/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

//returning 0 on an empty array is also smart so as to not divide by zero accidentally.

function findAverage(array) {
  if(array.length===0) return 0;
  let sum = 0;
  array.forEach(int=>sum+=int);
  return sum/array.length;
}
