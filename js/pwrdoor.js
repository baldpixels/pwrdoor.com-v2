"use strict";
//global

//variables
  var fps = 24;
    var frameTime = (1000 / 24);
  var intro = true;

$(document).ready(function(){
//local

//variables

//on load
  $("#content").hide();
  $("#BG").hide();
  updateDebug();
  loop();

//main loop
  function loop(){
    updateDebug();
  }
  setTimeout(loop, frameTime)

//event listeners
  //resize event
  $(window).resize(function() {

  });

  //click and hover events
  $("#logo").click(pwrClick);
    $("#logo").hover(function(){
      this.src = "images/logo_hover.png";
    });
    $("#logo").mouseleave(function(){
      this.src = "images/logo.png";
    });

//functions
  function updateDebug(){
    $("#debug").html("<p>debug</p>");
  }

  function pwrClick(){
    if(intro){
      $("#logo").animate({top: "200px"}, 500);
      setTimeout(intro(), 500);
    }
  }

  function intro(){
    $("#vlad").fadeIn(500);
    $("#BG").attr("src", "images/BG/wide.jpg");
    $("#BG").fadeIn(500);

    intro = false;
  }


});
