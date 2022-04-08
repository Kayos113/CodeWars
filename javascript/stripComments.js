// given: a string of indeterminate length that may or may not contain a character denoting comments
//        and an array of characters that denote comments in the given string.
//
// produce: a string that has removed any whitespace from the end of the line, as well as cutting off comments from the end of the line

function solution(input, markers) {
  // split input into array of individual lines .split("\n")
  // iterate over each line, forEach loop
  //    check if the current line contains a comment marker
  //      if so, remove the substring starting at the index of the marker
  //    check if the last character of the line is whitespace
  //      if so, while loop removing last character of line until the last character is no longer whitespace
  // recombine lines into single string and return value
  let lines = input.split("\n");
  lines.forEach( (line,index) => {
    markers.forEach( marker => {
      if(line.includes(marker)) {
        lines[index] = line.substring(0,line.indexOf(marker));
      }
      while(lines[index].charAt(lines[index].length-1)==" ") {
        lines[index] = line.substring(0,lines[index].length-1);
      }
    })
  })
  return lines.join("\n")
}

/*
* This was the first 4kyu problem given to me by codewars
*
*/
