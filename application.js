$(document).ready(function(){
  click_count = 0;

// HOVER
$(".col1").mouseenter(function(event){
  event.preventDefault();
  if (click_count % 2 == 0)
    $("h2").eq(0).addClass("red");
  else
    $("h2").eq(0).addClass("blue");
})
$(".col1").mouseleave(function(event){
  event.preventDefault();
  $("h2").eq(0).removeClass("blue").removeClass("red").addClass("empty");
})

$(".col2").mouseenter(function(event){
  event.preventDefault();
  if (click_count % 2 == 0)
    $("h2").eq(1).addClass("red");
  else
    $("h2").eq(1).addClass("blue");
})
$(".col2").mouseleave(function(event){
  event.preventDefault();
  $("h2").eq(1).removeClass("blue").removeClass("red").addClass("empty");
})

$(".col3").mouseenter(function(event){
  event.preventDefault();
  if (click_count % 2 == 0)
    $("h2").eq(2).addClass("red");
  else
    $("h2").eq(2).addClass("blue");
})
$(".col3").mouseleave(function(event){
  event.preventDefault();
  $("h2").eq(2).removeClass("blue").removeClass("red").addClass("empty");
})

$(".col4").mouseenter(function(event){
  event.preventDefault();
  if (click_count % 2 == 0)
    $("h2").eq(3).addClass("red");
  else
    $("h2").eq(3).addClass("blue");
})
$(".col4").mouseleave(function(event){
  event.preventDefault();
  $("h2").eq(3).removeClass("blue").removeClass("red").addClass("empty");
})

$(".col5").mouseenter(function(event){
  event.preventDefault();
  if (click_count % 2 == 0)
    $("h2").eq(4).addClass("red");
  else
    $("h2").eq(4).addClass("blue");
})
$(".col5").mouseleave(function(event){
  event.preventDefault();
  $("h2").eq(4).removeClass("blue").removeClass("red").addClass("empty");
})

$(".col6").mouseenter(function(event){
  event.preventDefault();
  if (click_count % 2 == 0)
    $("h2").eq(5).addClass("red");
  else
    $("h2").eq(5).addClass("blue");
})
$(".col6").mouseleave(function(event){
  event.preventDefault();
  $("h2").eq(5).removeClass("blue").removeClass("red").addClass("empty");
})

$(".col7").mouseenter(function(event){
  event.preventDefault();
  if (click_count % 2 == 0)
    $("h2").eq(6).addClass("red");
  else
    $("h2").eq(6).addClass("blue");
})
$(".col7").mouseleave(function(event){
  event.preventDefault();
  $("h2").eq(6).removeClass("blue").removeClass("red").addClass("empty");
})



// CLICK ! BUTTONS ACCORDING TO COLUMN


$(".col1").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col1 ul li.empty").last().removeClass("empty").addClass("blue").addClass("animated bounceInDown");
  }
  else
    $(".col1 ul li.empty").last().removeClass("empty").addClass("red").addClass("animated bounceInDown");
})

$(".col2").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col2 li.empty").last().removeClass("empty").addClass("blue").addClass("animated bounceInDown");
  }
  else
    $(".col2 li.empty").last().removeClass("empty").addClass("red").addClass("animated bounceInDown");
})

$(".col3").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col3 li.empty").last().removeClass("empty").addClass("blue").addClass("animated bounceInDown");
  }
  else
    $(".col3 li.empty").last().removeClass("empty").addClass("red").addClass("animated bounceInDown");
})

$(".col4").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col4 li.empty").last().removeClass("empty").addClass("blue").addClass("animated bounceInDown");
  }
  else
    $(".col4 li.empty").last().removeClass("empty").addClass("red").addClass("animated bounceInDown");
})

$(".col5").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col5 li.empty").last().removeClass("empty").addClass("blue").addClass("animated bounceInDown");
  }
  else
    $(".col5 li.empty").last().removeClass("empty").addClass("red").addClass("animated bounceInDown");
})

$(".col6").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col6 li.empty").last().removeClass("empty").addClass("blue").addClass("animated bounceInDown");
  }
  else
    $(".col6 li.empty").last().removeClass("empty").addClass("red").addClass("animated bounceInDown");
})

$(".col7").click(function(event){
  event.preventDefault();
  click_count += 1;
  if (click_count % 2 == 0) {
    $(".col7 li.empty").last().removeClass("empty").addClass("blue").addClass("animated bounceInDown");
  }
  else
    $(".col7 li.empty").last().removeClass("empty").addClass("red").addClass("animated bounceInDown");
})


// Restart button clears the board
$("#restart").click(clear_board);

function clear_board(){
  $("li").addClass("animated bounceOutDown").one('oanimationend animationend webkitAnimationEnd', function(event) {
       $(this).removeClass('animated bounceOutDown red blue bounceInDown');
       $(this).addClass('empty');
   });
}


})
