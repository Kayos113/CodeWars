// give: array of ints, always be one digit -> odd amount
//    numbers can be negative,
// return the value od the digit listed an odd amount of times

function findOdd(intArr) {
  // track digits, and number of instances - array of objects / digit, and count values
  // loop - integer array
  // if current digit being looked at is contained in one of the objects, increment that object's count
  // otherwise, create new object and push it to object array
  // loop - object array
  // if current object's count is odd, return digit;

  let returnable = null;
  let objArr = [];
  //object schema
  /*
  {
    digit: Integer,
    count: Integer
  }
  */
  let counted; // bool value to track whether digit is in objArr
  intArr.forEach(int => {
    counted = false;
    objArr.forEach(obj => {
      if(int===obj.digit) {
        obj.count = obj.count+1;
        counted=true;
      }
    });
    if(!counted) {
      objArr.push({
        digit: int,
        count: 1
      });
    }
  });

  objArr.forEach(obj => {
    if(obj.count%2===1) {
      returnable = obj.digit;
    }});

  return returnable; // though it was said there will always be an odd digit, this is best practice to allow for fringe cases. -null is a fail state return
}
