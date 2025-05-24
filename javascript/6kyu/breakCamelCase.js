/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
  let str = string.split(/(?=[A-Z])|(?=[A-Z])/);
  return str.join(" ");
}
