$(document).ready(function(){
  click_count = 0;

// CLICK PLAY! BUTTONS ACCORDING TO COLUMN
$(".col1 button").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col1 li.empty").last().removeClass("empty").addClass("blue");
  }
  else
    $(".col1 li.empty").last().removeClass("empty").addClass("red");
})

$(".col2 button").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col2 li.empty").last().removeClass("empty").addClass("blue");
  }
  else
    $(".col2 li.empty").last().removeClass("empty").addClass("red");
})

$(".col3 button").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col3 li.empty").last().removeClass("empty").addClass("blue");
  }
  else
    $(".col3 li.empty").last().removeClass("empty").addClass("red");
})

$(".col4 button").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col4 li.empty").last().removeClass("empty").addClass("blue");
  }
  else
    $(".col4 li.empty").last().removeClass("empty").addClass("red");
})

$(".col5 button").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col5 li.empty").last().removeClass("empty").addClass("blue");
  }
  else
    $(".col5 li.empty").last().removeClass("empty").addClass("red");
})

$(".col6 button").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col6 li.empty").last().removeClass("empty").addClass("blue");
  }
  else
    $(".col6 li.empty").last().removeClass("empty").addClass("red");
})

$(".col7 button").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col7 li.empty").last().removeClass("empty").addClass("blue");
  }
  else
    $(".col7 li.empty").last().removeClass("empty").addClass("red");
})


// Restart button clears the board
$("#restart").click(clear_board);

function clear_board(){
  $("li").removeClass("red").removeClass("blue").addClass("empty");
}



})
