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
  $("#BG").hide();
  updatePort();

//event listeners
  //resize event
  $(window).resize(function() {
    portHeight = $("#port").height();
    updatePort();
    updateDebug();
  });

  //click and hover events
  $("#logo").click(pwrClick);
    $("#logo").hover(function(){
      this.src = "images/logo_hover.png";
    });
    $("#logo").mouseleave(function(){
      this.src = "images/logo.png";
    });

  $("#left").click(leftClick);
    $("#left").hover(function(){
      this.src = "images/left_hover.png";
    });
    $("#left").mouseleave(function(){
      this.src = "images/left.png";
    });

  $("#right").click(rightClick);
    $("#right").hover(function(){
      this.src = "images/right_hover.png";
    });
    $("#right").mouseleave(function(){
      this.src = "images/right.png";
    });

//functions
  function updateDebug(){
    $("#debug").html("<p>debug</p>");
  }

  function updatePort(){
    portWidth = .5625*portHeight;
    $("#port").css("width", portWidth + "px");
  }

  function pwrClick(){
    $("#logo").animate({bottom: "125px", width: "250px", opacity: "0"}, 500, "swing");
    introAnimation();
  }

  function introAnimation(){
    //append dashboard items
    $("#dashboard").append("<img id='dash' src='images/dash.png' alt='' />");
    $("#dashboard").append("<img id='vlad' src='images/vlad.png' alt='' />");

    $("#dash").animate({top: "0px"}, 500, "swing");
    $("#vlad").animate({bottom: "0px"}, 500, "swing");

    $("#dashboard").append("<img id='left' src='images/left.png' alt='' />");
    $("#dashboard").append("<img id='right' src='images/right.png' alt='' />");
  }

  function leftClick(){
    $("#dashboard").animate({left: "-33%"}, 500, "swing");
    $("#content").animate({right: "0px"}, 500, "swing");
  }

  function rightClick(){
    $("#dashboard").animate({right: "-33%"}, 500, "swing");
    $("#content").animate({left: "0px"}, 500, "swing");
  }


});
