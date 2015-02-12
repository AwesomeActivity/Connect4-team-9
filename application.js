
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
      $(this).find(".empty").last().removeClass("empty").addClass("blue");
    }
    else
      $(this).find(".empty").last().removeClass("empty").addClass("red");
  })
})


// RESTART

$("#restart").click(clear_board);

function clear_board(){
  $("li").removeClass("red").removeClass("blue").addClass("empty");
}

})
