//given an array of numbers
//sort the array in a specified manner
//  odd numbers should be in ascending order
//  even numbers should remain in their initial index

function sortArray(array) {
  //loop
  //  filter function - pull out odd numbers to new array and sort it
  //  even index?
  //second loop - map array
  //  if the current element is odd, replace it with the next index of the oddArray
  let oddArr = array.filter( element => Math.abs(element)%2==1 ).sort( (a,b) => {
    if(a<b) {
      return -1;
    }
    return 1;
  });
  let oddIndex = 0;
  let newArr = [];
  array.map( element => {
    if(Math.abs(element)%2==1) {
      newArr.push(oddArr[oddIndex++]);
    } else {
      newArr.push(element);
    }
  });
  return newArr;
}
