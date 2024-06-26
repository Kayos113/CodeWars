/*
  The point of this ecercise is to write a function that takes two arrays, a and b, and returns
  a new array which is all of the elements of array a that are NOT in array b.
*/

function arrayDiff(a, b) {
  let arr = [];
  a.forEach(elem => (!b.includes(elem) ? arr.push(elem) : null) ) ;
  return arr;
}
