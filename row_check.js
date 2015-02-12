function checkRow(board, color) {

  var height = 6;

  var width = 7;

  for(col = 0; col < height; col++) {
    for (row = 0; row < width - 3; row++) {
      if (color) {
        if (board[row][col] === color &&
          board[row + 1][col] === color &&
          board[row + 2][col] === color &&
          board[row + 3][col] === color) {
          return true;
        }
      }
    }
  }
  return false;
}


board = [["","","","","",""],
         ["","","blue","",""],
         ["","","blue","",""],
         ["","","blue","",""],
         ["","","blue","",""],
         ["","","","",""],
         ["","","","",""]]

console.log(checkRow(board, "blue"))

