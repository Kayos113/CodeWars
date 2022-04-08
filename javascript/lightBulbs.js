function lightBulbs(lights, n) {

  let firstState;
  for(let i=0; i<n; i++) {
    firstState=lights[0];
    for(let j=lights.length-1; j>=0; j--)
      {
        if(j===0) {
          break;
        }
        if(lights[j]===1) {
          if(j===lights.length-1) {
            lights[0] = switchState(lights[0]);
          } else {
            lights[j+1] = switchState(lights[j+1]);
          }
        }
      }
    if(firstState) {
      lights[1] = switchState(lights[1]);
    }
  }
  return lights;
}

function switchState(m) {
  if(m===0) {
    return 1;
  } else {
    return 0;
  }
}
