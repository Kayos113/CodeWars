/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str){
  let newStr = "";
  let regex = /[-_ ]/;
  str.split(regex).forEach( (w, index) => { // split strings by dashes, hypens or spaces using regex
    if(index==0 && /[a-z]/.test(w.charAt(0))) { //check only the first word to possible be all lowercase 
      newStr += w.toLowerCase();
    } else { //add the word with a leading capital and following lowercase
      newStr += w.charAt(0).toUpperCase() + w.substring(1).toLowerCase();
    }
  });
  return newStr;
}
