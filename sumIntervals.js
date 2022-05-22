function sumIntervals(intervals) {
  let sumArr = [];
  intervals.forEach(interval => {
    if(sumArr.length==0) {
      sumArr.push(interval);
    }
    let incorporated = false;
    sumArr.forEach( (trueInterval, index) => {
      if((interval[0] <= trueInterval[1] && interval[0] >= trueInterval[0]) || (interval[1] >= trueInterval[0] && interval[1] <= trueInterval[1]) || (interval[0] <= trueInterval[0] && interval[1] >= trueInterval[1])) {
        // interval overlaps or encapsulates
        if(interval[0] < trueInterval[0]) {
          trueInterval[0] = interval[0];
        }
        if(interval[1] > trueInterval[1]) {
          trueInterval[1] = interval[1];
        }
        incorporated = true;
      }
      if(index==sumArr.length-1 && !incorporated) {
        sumArr.push(interval);
      }
    })
  })
  let sum = 0;
  sumArr.forEach(interval => {
    sum += interval[1]-interval[0];
  })
  return sum;
}
