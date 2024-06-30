/*
Write a function that takes an array of numbers and returns the sum of the
numbers. The numbers can be negative or non-integer. If the array does not
contain any numbers then you should return 0.
*/

// Sum Numbers
function sum (numbers) {
    "use strict";
    if(numbers.length==0) return 0;
    return numbers.reduce( (acc, curr) => acc+=curr );
};

/*
  Notes after the fact:

    By adding another variable to the reduce function, which would be the
    initial value, it would be possible to get the same result because an
    empty array would still return 0 without the if statement.
*/
