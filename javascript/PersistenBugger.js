/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)


*/

function persistence(num) {
  let temp = num;
  let count = 0;
  while(temp>=10) {
    temp = recursivePersistence(temp);
    count++;
  }
  return count;
}

function recursivePersistence(num) {
  let numArr = [];

  while(num>0) {
    numArr.push(num%10);
    num= Math.floor(num/10);
  }
  let multTotal=1; //set this to one so the multiplication loop, actually multiplies rather than being equal to 0
  numArr.forEach( i => { multTotal *= i });
  return multTotal;
}
