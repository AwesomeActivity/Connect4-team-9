var board = [
  [ '','','','','',''],
  [ '','','','','',''],
  [ '','','','','',''],
  [ '','','','','',''],
  [ '','','','','',''],
  [ '','','','','',''],
  [ '','','','','',''] ];

function addPiece(board, colIndex, color) {
  for(i = 6; i >=0 ; i--) {
    if (board[colIndex][i] == ''){
      board[colIndex][i] = color;
      break;
    }
  }
};

function checkWin(board, color) {
  return diagonalCheck(board, color) ||
         checkColumn(board, color) ||
         checkRow(board, color);
};

addPiece(board, 2, "red");
addPiece(board, 3, "red");
addPiece(board, 4, "blue");
addPiece(board, 4, "blue");
addPiece(board, 4, "blue");
addPiece(board, 4, "blue");
addPiece(board, 5, "red");
console.log(board);
console.log(checkWin(board, "blue"));
