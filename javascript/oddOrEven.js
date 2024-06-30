/*
Write a function that removes the spaces from the string, then return the resultant string.
*/

function oddOrEven(array) {
   return array.reduce((acc, curr) => acc + curr, 0)%2===0 ? "even" : "odd";
}
