// given: two arrays of strings
// return: third array of strings from array1 that are substrings of any word in array2
// returned array should be returned alphabetically

function inArray(array1,array2){
  //instantiate empty local array to hold words to be returned
  //loop - over each word in array1
    //nested loop - over each word in array2
      //check if the current word from array1 is a substring of the current word from array2 (string2.includes(string1))
      //if so, check if word is in local array
      //if not, add word to the local array
  //exit loop
  //return local array
  let returnArr = [];
  array1.forEach(str1 => {
    array2.forEach(str2 => {
      if(str2.includes(str1) && !returnArr.includes(str1)) {
        returnArr.push(str1);
      }
    })
  })
  return returnArr.sort();
}
