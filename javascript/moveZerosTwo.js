function moveZeros(arr) {
  let head = [];
  let tail = [];
  arr.forEach( e => {
    if(e===0) {
      tail.push(e);
    } else {
      head.push(e);
    }
  });
  return [...head, ...tail];
}
