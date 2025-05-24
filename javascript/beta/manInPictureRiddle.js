/*

My Father's Father Riddle
You are given a variation of the classic logical riddle:

A man looks at a picture on the wall and says:
'Brothers and sisters, I have none.
But that man's father is my father's son.'
Who is the man in the picture?

The answer: "My son."

Objective
Given an array of words representing a family chain, determine the relationship of the final person in the chain to yourself.

Every array starts with "my" and has a minimum one link in the chain, which is a patriarchal relation.

Your job is to calculate the generational difference and return the proper relationship as a string.

Sometimes another relative tries to butt in, but that's not allowed! Instead tell us they're "not my immediate patriarchal lineage"

Examples
findLineage(['my', "father's", "son"])
// ➞ "myself"

findLineage(['my', "father's", "son's", "son's", "son"])
// ➞ "my grandson"

findLineage(['my', "father's", "father's", "father"])
// ➞ "my great grandfather"

findLineage(['my', "father's", "son's", "son"])
// ➞ "my son"

findLineage(['my', "uncle's", "son"])
// ➞ "not my immediate patriarchal lineage"

*/

function findLineage(family) {
  let oldGenArr = ["myself", "father", "grandfather"] //any "greats" will be generated in a loop
  let youngGenArr = ["myself", "son", "grandson"] //same as above for "great" grandsons
  let genCounter=0; // 0 is "myself", +1 would be "my son", and -1 would be "my father", etc.
                      // To be call upon in the arrays above, the pos or neg simply tells you which array to pull from
  let genMult=1; //set to one if there is no "grand" in the word, set to two if there is a "grand"
  family.forEach( (word, index) => {
    if(word.includes("grand")) genMult=2;
    else genMult=1;
    if(index==0&&word!="my") return null;
    else if(!word.includes("father")&&!word.includes("son")) genCounter=null;
    else if(word.includes("father")) genCounter-=1*genMult;
    else if(word.includes("son")) genCounter+=1*genMult;
  });
  if(genCounter==null) return "not my immediate patriarchal lineage";
  if(genCounter==0) return "myself";

  let greats = " ";
  if(Math.abs(genCounter)>2) { // in either directions, there are "greats" to generate, then use the furtherst entry in the proper generation array
    let temp = Math.abs(genCounter);
    if(temp>2) {
      while(temp>2){
        greats+="great ";
        temp--;
      }
    }
  }

  let relation = "";
  console.log("if statements: " + genCounter);
  if(genCounter<=-2){relation = oldGenArr[2]; console.log(1)}
  else if(genCounter>=2) {relation = youngGenArr[2]; console.log(2)}
  else if(genCounter>=0)  {relation = youngGenArr[genCounter]; console.log(3)}
  else if(genCounter<0) {relation = oldGenArr[Math.abs(genCounter)]; console.log(4)}

  let ret = "my" + greats + relation;
  console.log(ret);
  console.log(family);
  console.log(genCounter);
  return ret;
}
