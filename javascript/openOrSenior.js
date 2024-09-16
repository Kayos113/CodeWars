/*
  The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
  They would like your help with an application form that will tell prospective members
  which category they will be placed.

  To be a senior, a member must be at least 55 years old and have a handicap greater
  than 7. In this croquet club, handicaps range from -2 to +26; the better the player
  the lower the handicap.

  Input
  Input will consist of a list of pairs. Each pair contains information for a single
  otential member. Information consists of an integer for the person's age and an integer
  or the person's handicap.
    Note: at least 55 years is inclusive where greater than 7 is exclusive so (age>54 && handicap>7)

  Output
  Output will consist of a list of string values (in Haskell and C: Open or Senior)
  stating whether the respective member is to be placed in the senior or open category.
*/

function openOrSenior(data){
  if(data.length==0) {
    return [];
  }
  let arr = [data.length];
  data.forEach( (memberEntry, index) => {
    // if age is over 54 and handicap is over 7, return Senior, else, return Open
    if(memberEntry[0]>54 && memberEntry[1]>7) {
      arr[index] = "Senior";
    } else {
      arr[index] = "Open";
    }
  });
  return arr;
}
