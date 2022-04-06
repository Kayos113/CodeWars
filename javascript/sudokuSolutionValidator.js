/*
* Given:
*   a 9 by 9 matrix containing only integers from 0-9
*
* Determine:
*   if the matrix is a valid sudoku solution
*     - determine if each row contains each integer 1-9 once only
          board[0][0-8]
          board[1][0-8]
          etc.
*     - determine each 3x3 block contains each integer 1-9 once only
          board[0-2][0-2]
          board[0-2][3-5]
          board[0-2][6-8]
          board[3-5][0-2]
          etc.

    Note: if at any point an integer is equal to 0, the solution is invalid;
*/


function validSolution(board){
  //zeroChecker
  if(board.filter(row => row.includes(0)).length>0) {
    return false;
  }

  let intChecker = (new Array(9)).fill(false);

  //rowChecker
  board.forEach(row => {
    row.forEach(int =>  intChecker[int-1] = !intChecker[int-1]);
    console.log(row + " : " + intChecker)
    if(intChecker.filter( b => b==false).length>0) {
      return false;
    }
    intChecker.fill(false);
  });

  //squareChecker
  for(let i=0; i<board.length; i+=3) {
    for(let j=0; j<board[i].length; j+=3) {
      for(let indexOne=i; indexOne<=i+2; indexOne++) {
        for(let indexTwo=j; indexTwo<=j+2; indexTwo++) {
          let currInt = board[indexOne][indexTwo];
          intChecker[currInt-1] = !intChecker[currInt-1];
        }
      }
      if(intChecker.filter( b => b==false).length>0) {
        return false;
      }
      intChecker.fill(false);
    }
  }

  return true;
}
