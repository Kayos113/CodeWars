// given string, directional characters 'n','s', 'w', 'e'
// each character indicates 1 block walked, which takes one minute
// determine if a walk takes 10 minutes
// also determine if the walk will return you to the starting location

function isValidWalk(walk) {
  // object - hold x, y value pair to compute how far from starting value we are
  // variable - int - count minutes taken in walk
  // loop - walk, character by character, evaluating both time, and positoinally where we are
  // 4 conditionals, n, s, e, w
    //switch
    // n - y+1
    // s - y-1
    // e - x+1
    // w - x-1
  // increment minuteCount
  // exit loop
  // check if the walk time is 10 minutes, if not return false
  // check if the positional value is 0,0 or back at the starting point., if not return false
  // return true, as all conditions have been met
  let posDelta = {x:0,y:0};
  let minuteCount = 0;
  let currChar;
  walk.forEach(currChar => {
    switch(currChar) {
      case 'n':
        posDelta.y = posDelta.y+1;
        break;
      case 's':
        posDelta.y = posDelta.y-1;
        break;
      case 'w':
        posDelta.x = posDelta.x-1;
        break;
      case 'e':
        posDelta.x = posDelta.x+1;
        break;
      //default case, unnecessary
    }
    minuteCount++;
  });
  if(posDelta.x==0 && posDelta.y==0) {
    if(minuteCount==10) {
      return true;
    }
  }
  return false;
}
