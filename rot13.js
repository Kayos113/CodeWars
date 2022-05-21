function rot13(message){
  //ASCII
  //  65dec - 'A'
  //  90dec - 'Z'
  //  97dec - 'a'
  // 122dec - 'z'
  //when rotating, if a number ends up above or below these thresholds, the rotation must take into consideration wrapping around to the otherside of that threshold

  let newMessage = "";
  let currCode;
  for(let i=0; i<message.length; i++) {
    currCode = message.charCodeAt(i);
    if(currCode>=65 && currCode<=90) {
      //capital letter rotation
      currCode+=13;
      if(currCode>90) {
        currCode = 64 + (currCode-90);
      }
    }
    else if (currCode>=97 && currCode<=122) {
      //lowercase letter rotation
      currCode+=13;
      if(currCode>122) {
        currCode = 64 + (currCode-90);
      }
    }
    newMessage+=String.fromCharCode(currCode);
  }
  return newMessage;
}
