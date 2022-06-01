/*
* Given:
*     An ordered array of integers
*
* Return:
*     A string where any run of three or more consecutive integers is replaced with a range of the upper and lower bounds of that range
*/

function solution(list){
  // loop
  //   iterate through each integer
  //    determine whether the current integer is in a consecutive run,
  //    if so, determine if this is the last integer in the run
  //      if so, add the range to the string
  //      if not, continue on
  //    if not, add current integer to the string

  let rangeString = '';
  let lowerBound = 0;
  list.forEach( (int, index) => {
    if(int+1 == list[index+1]) { // the next int is a consecutive number
      // do nothing
    } else { // end of a run, a single int, or a run of two ints that should not be a range
      if(lowerBound == index) { // single int
        rangeString+=","+int;
      } else if(lowerBound == index-1) { // run of two
        rangeString+=","+list[lowerBound]+","+int;
      } else { // range
        rangeString+=","+list[lowerBound]+"-"+int;
      }
      lowerBound=index+1; // set the lower bound to the next index after this chain.
    }
  });
  return rangeString.substring(1); //chop off a comma at the beginning as a side effect of the loop..
}
