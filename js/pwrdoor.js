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

  $("#dashboard").on('click', '#left_hover', leftClick);
    $("#dashboard").on('mouseover', '#left', function(){
      $("#left_hover").show();
    });
    $("#dashboard").on('mouseout', '#left_hover', function(){
      $("#left_hover").hide();
    });

  $("#dashboard").on('click', '#right_hover', rightClick);
    $("#dashboard").on('mouseover', '#right', function(){
      $("#right_hover").show();
    });
    $("#dashboard").on('mouseout', '#right_hover', function(){
      $("#right_hover").hide();
    });

  $("#dashboard").on('click', '#brights_hover', brightsClick);
    $("#dashboard").on('mouseover', '#brights', function(){
      $("#brights_hover").show();
    });
    $("#dashboard").on('mouseout', '#brights_hover', function(){
      $("#brights_hover").hide();
    });

    $("#dashboard").on('click', '#M_hover', MClick);
      $("#dashboard").on('mouseover', '#M', function(){
        $("#M_hover").show();
      });
      $("#dashboard").on('mouseout', '#M_hover', function(){
        $("#M_hover").hide();
      });

    $("#dashboard").on('click', '#G_hover', GClick);
      $("#dashboard").on('mouseover', '#G', function(){
        $("#G_hover").show();
      });
      $("#dashboard").on('mouseout', '#G_hover', function(){
        $("#G_hover").hide();
      });

    $("#dashboard").on('click', '#P_hover', PClick);
      $("#dashboard").on('mouseover', '#P', function(){
        $("#P_hover").show();
      });
      $("#dashboard").on('mouseout', '#P_hover', function(){
        $("#P_hover").hide();
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
    $("#dashboard").append("<img id='vlad' src='images/vladimir.png' alt='' />");
    $("#port").append("<img id='pistonL' src='images/pistonL.png' alt='' />");
    $("#port").append("<img id='pistonR' src='images/pistonR.png' alt='' />");

    $("#vlad").animate({bottom: "0px"}, 625, "swing");
    $("#pistonL").animate({top: "0px"}, 625, "easeOutBack");
    $("#pistonR").animate({top: "0px"}, 625, "easeOutBack");
    $("#dash").animate({top: "0px"}, 625, "easeOutBack", function(){
      $("#logo").fadeOut(100);

      $("#dashboard").append("<img id='left' src='images/left.png' alt='' />");
      $("#dashboard").append("<img id='left_hover' src='images/left_hover.png' alt='' />");

      $("#dashboard").append("<img id='right' src='images/right.png' alt='' />");
      $("#dashboard").append("<img id='right_hover' src='images/right_hover.png' alt='' />");

      $("#dashboard").append("<img id='brights' src='images/brights.png' alt='' />");
      $("#dashboard").append("<img id='brights_hover' src='images/brights_hover.png' alt='' />");

      $("#dashboard").append("<img id='M' src='images/M.png' alt='' />");
      $("#dashboard").append("<img id='M_hover' src='images/M_hover.png' alt='' />");

      $("#dashboard").append("<img id='G' src='images/G.png' alt='' />");
      $("#dashboard").append("<img id='G_hover' src='images/G_hover.png' alt='' />");

      $("#dashboard").append("<img id='P' src='images/P.png' alt='' />");
      $("#dashboard").append("<img id='P_hover' src='images/P_hover.png' alt='' />");


      $("#left_hover").hide();
      $("#right_hover").hide();
      $("#brights_hover").hide();
      $("#M_hover").hide();
      $("#G_hover").hide();
      $("#P_hover").hide();

      $("#debug").html("<p>intro complete</p>");
    });

  }

  function leftClick(){
    $("#debug").html("<p>leftClick</p>")
    $("#dashboard").animate({left: "-33%"}, 500, "swing");
    $("#pistonL").animate({right: "+131%"}, 500, "swing");
    $("#pistonR").animate({left: "+61%"}, 500, "swing");
    $("#content").animate({left: "66%"}, 500, "swing");
  }

  function rightClick(){
    $("#debug").html("<p>rightClick</p>")
    $("#dashboard").animate({left: "+33%"}, 500, "swing");
    $("#pistonL").animate({right: "+61%"}, 500, "swing");
    $("#pistonR").animate({left: "+131%"}, 500, "swing");
    $("#content").animate({left: "33%"}, 500, "swing");
  }

  function brightsClick(){
    $("#debug").html("<p>brightsClick</p>")
    $("#dashboard").animate({left: "0px"}, 500, "swing");
    $("#pistonL").animate({right: "+90%"}, 500, "swing");
    $("#pistonR").animate({left: "+90%"}, 500, "swing");
    $("#content").animate({left: "50%"}, 500, "swing");
  }

  function MClick(){
    $("#debug").html("<p>Movies</p>")
    for(var i=0; i<25; i++){
      $("#content").append("<p>Movie "+i+"</p>");
    }
  }

  function GClick(){
    $("#debug").html("<p>Graphics</p>")
  }

  function PClick(){
    $("#debug").html("<p>Photos</p>")
  }


});
