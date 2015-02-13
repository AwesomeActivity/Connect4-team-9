function checkColumn(board, color) {

  var height = 6;

  var width = 7;

  for (col = 0; col < width ; col++) {
    for(row = 0; row < height - 3; row++) {
      if (color) {
        if (board[col][row] === color &&
          board[col][row + 1] === color &&
          board[col][row + 2] === color &&
          board[col][row + 3] === color) {
          return true;
        }
      }
    }
  }
  return false;
}


// var board = [
//         ["", "" ,"","","",""],
//         ["", "" ,"","","",""],
//         ["", "" ,"","","",""],
//         ["", "" ,"blue","blue","blue","blue"],
//         ["", "" ,"","","",""],
//         ["", "" ,"","","",""],
//         ["", "" ,"","","",""]]


// console.log(checkColumn(board, "blue"))


