function checkColumn(board, color) {

  var height = 6;

  var width = 7;

  for(row = 0; row < width; row++) {
    for (col = 0; col < height - 3; col++) {
      if (color) {
        if (board[row][col] === color &&
          board[row][col + 1] === color &&
          board[row][col + 2] === color &&
          board[row][col + 3] === color) {
          return true;
        }
      }
    }
  }
  return false;
}


board = [["","","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","red","red","red","red"],
        ["","","","",""],
        ["","","","",""]]


console.log(checkColumn(board, "red"))


