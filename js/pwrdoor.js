"use strict";
//global

//variables
  var fps = 24;
    var frameTime = (1000 / 24);

$(document).ready(function(){
//local

//variables
  var portHeight = $("#port").height();
    var portWidth;

//on load
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
    portHeight = $("#port").height();
    updatePort();
    if ($(window).width() < 768) {
        //switch to mobile
    } else {
       //back to web dashboard
    }
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
  function updatePort(){
    portWidth = 1.333*portHeight;
    $("#port").css("width", portWidth + "px");
  }

  function updateDebug(){
    $("#debug").html("portal height: " + portHeight + "px </br> portal width: " + portWidth + "px");
  }

  //pwrClick moves stuff around
  function pwrClick(){
  }


});
