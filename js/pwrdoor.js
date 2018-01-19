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
    },function(){
      this.src = "images/logo.png";
    });

  $("#dashboard").on('click', '#left', leftClick);
    $("#dashboard").on('mouseover', '#left', function(){
      $("#left").attr("src","images/left_hover.png");
    });
    $("#dashboard").on('mouseout', '#left', function(){
      $("#left").attr("src","images/left.png");
    });

  $("#dashboard").on('click', '#right', rightClick);
    $("#dashboard").on('mouseover', '#right', function(){
      $("#right").attr("src","images/right_hover.png");
    });
    $("#dashboard").on('mouseout', '#right', function(){
      $("#right").attr("src","images/right.png");
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
    $("#logo").css("z-index", "-1")
    $("#logo").animate({top: "112px", width: "225px"}, 750, "swing", function(){
      introAnimation();
    });
  }

  function introAnimation(){
    //append dashboard items
    $("#dashboard").append("<img id='dash' src='images/dash.png' alt='' />");
    $("#dashboard").append("<img id='vlad' src='images/vlad.png' alt='' />");

    $("#vlad").animate({bottom: "0px"}, 625, "swing");
    $("#dash").animate({top: "0px"}, 1250, "easeOutBounce", function(){
      $("#logo").fadeOut(100);

      $("#dashboard").append("<img id='left' src='images/left.png' alt='' />");
      $("#dashboard").append("<img id='right' src='images/right.png' alt='' />");

      $("#debug").html("<p>intro complete</p>");
    });

  }

  function leftClick(){
    $("#debug").html("<p>leftClick</p>")
    $("#dashboard").animate({left: "-33%"}, 500, "swing");
    $("#content").animate({right: "0px"}, 500, "swing");
  }

  function rightClick(){
    $("#debug").html("<p>rightClick</p>")
    $("#dashboard").animate({left: "+33%"}, 500, "swing");
    $("#content").animate({left: "0px"}, 500, "swing");
  }


});
