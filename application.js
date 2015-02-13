$(document).ready(function(){
  click_count = 0;

// HOVER EFFECT

$(".column").each(function(index, value){
  $(this).mouseenter(function(event){
    event.preventDefault();
    if (click_count % 2 == 0) {
      $("h2").eq(index).addClass("red");
    } else {
      $("h2").eq(index).addClass("blue");
    }
  })
})

$(".column").each(function(index, value){
  $(this).mouseleave(function(event){
    event.preventDefault();
    $("h2").eq(index).removeClass("blue").removeClass("red").addClass("empty");
  })
})


// CLICKING

$(".column").each(function(index, value){

  $(this).click(function(event){
    event.preventDefault();
    click_count += 1;
    if (click_count % 2 == 0) {
      $(this).find(".empty").last().removeClass("empty").addClass("blue").addClass("animated bounceInDown");
      addPiece(board, index, "blue");
      if (checkWin(board,"blue")){
        alert("Player Blue Wins!!!!!");
        clear_board();
      }
    }
    else{
      $(this).find(".empty").last().removeClass("empty").addClass("red").addClass("animated bounceInDown");
      addPiece(board, index, "red");
      if (checkWin(board,"red")){
        alert("Player Red Wins!!!!!");
        clear_board();
      }
    }
  })
})

// RESTART

$("#restart").click(clear_board);

function clear_board(){
  $("li").addClass("animated bounceOutDown").one('oanimationend animationend webkitAnimationEnd', function(event) {
   $(this).removeClass('animated bounceOutDown red blue bounceInDown');
   $(this).addClass('empty');
console.log(board);
   // board.forEach(function(col, index) {
   //  col.forEach(function(spot, index) {
   //    spot = '';
   //  })
   // })
  for(var i = 0; i < 7; i++) {
    var col = board[i];
    for(var j = 0; j < 6; j++) {
      col[j] = '';
    }
  }
console.log(board);
 });
}

});

