// Pseudo

// Checks for diagonal moving from bottom left to top right

// 4 item where n..n+3, y.. y-3
//   edge case if n < 0 || n > 6
//                y < 0 || y > 5

// * Start check with col[0] for either red or black and check neighbor index[col] diagonal top right
// * If neighbor is incorrect - move to next item in column
// * If neighbor is correct - check next neighbor
// * If reaches boundary
// * board[column][row]
function diagonalCheck(board, color) {
  return checkBottomLeftUp(board, color) ||
  checkTopLeftDown(board, color);
}

function checkBottomLeftUp(board, color) {
  for(col=0; col < 4; col++){
    for(row=3; row < 6; row++){
      if (board[col][row] === color) {
        if (board[col+1][row-1] === color) {
          if (board[col+2][row-2] === color){
            if (board[col+3][row-3] === color){
            return true;
            }
          }
        }
      }
    }
  }
  return false //finishes checking all staring nodes and doesn't find 4 in a row will return false
};

function checkTopLeftDown(board, color) {
  for(col=0; col < 4; col++){
    for(row=0; row < 3; row++){
      if (board[col][row] === color) {
        if (board[col+1][row+1] === color) {
          if (board[col+2][row+2] === color){
            if (board[col+3][row +3] === color){
            return true;
            }
          }
        }
      }
    }
  }
  return false //finishes checking all staring nodes and doesn't find 4 in a row will return false
};

// Test -----------

var board = [
  [ '','','','','','','red' ],
  [ '','','','','','red','' ],
  [ '','','','','red','','' ],
  [ '','','','red','','','' ],
  [ '','','red','','','','' ],
  [ '','','','','','','' ],
  [ '','','','','','','' ] ]

var board2 = [
  [ 'red','','','','','','' ],
  [ '','red','','','','','' ],
  [ '','','red','','','','' ],
  [ '','','','red','','','' ],
  [ '','','','','','','' ],
  [ '','','','','','','' ],
  [ '','','','','','','' ] ]

var board3 = [
  [ 'red','','','blue','','','' ],
  [ '','red','','','','','red' ],
  [ 'red','','blue','','blue','','red' ],
  [ '','blue','','red','blue','blue','' ],
  [ '','red','','red','blue','','' ],
  [ 'blue','','blue','blue','','','' ],
  [ '','','blue','','','','' ] ]

console.log(checkBottomLeftUp(board,'red') === true);
console.log(checkTopLeftDown(board2,'red') === true);
console.log(diagonalCheck(board3, 'blue')) === true;
