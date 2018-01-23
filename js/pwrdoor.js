"use strict";
//global

//variables
  var fps = 24;
    var frameTime = (1000 / 24);
  var dashUp = false;
  var intro = true;

  var movieLinks = [
    'https://player.vimeo.com/video/173084329',
    'https://player.vimeo.com/video/177589535',
    'https://player.vimeo.com/video/214244680',
    'https://player.vimeo.com/video/251344926',
    'https://player.vimeo.com/video/251346464'
  ];

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

  $("#dashboard").on('click', '#left', leftClick);

  $("#dashboard").on('click', '#right', rightClick);

  $("#dashboard").on('click', '#brights', brightsClick);

  $("#dashboard").on('click', '#M', MClick);

  $("#dashboard").on('click', '#G', GClick);

  $("#dashboard").on('click', '#P', PClick);

  $("#dashboard").on('click', '#C', CClick);

  $("#dashboard").on('click', '#Q', QClick);

  $("#dashboard").on('click', '#hazard_up', hazardUpClick);

  $("#dashboard").on('click', '#hazard_down', hazardDownClick);

//functions
  function updateDebug(){
    $("#debug").html("<p>debug</p>");
  }

  function updatePort(){
    portWidth = .5625*portHeight;
    $("#port").css("width", portWidth + "px");
  }

  function pwrClick(){
    if(intro){
      //load dashboard
      $("#dashboard").append("<img id='dash' src='images/dash.png' alt='' />");
      $("#port").append("<img id='passenger' src='images/passenger.png' alt='' />");
      $("#port").append("<img id='pistonL' src='images/pistonL.png' alt='' />");
      $("#port").append("<img id='pistonR' src='images/pistonR.png' alt='' />");
      //move logo up
      //$("#logo").css("z-index", "-1")
      $("#logo").animate({top: "-200px"}, 750, "swing", function(){
        introAnimation();
      });
      intro = false;
    }
  }

  function introAnimation(){
    $("#passenger").animate({bottom: "-10px"}, 625, "swing");
    $("#pistonL").animate({top: "0px"}, 625, "easeOutBack");
    $("#pistonR").animate({top: "0px"}, 625, "easeOutBack");
    $("#logo").animate({top: "-5%"}, 625, "easeOutBack").animate({top: "-200px"}, 500, "swing");
    $("#dash").animate({top: "0px"}, 625, "easeOutBack", function(){
    //append controls
      //left
      $("#dashboard").append("<img id='left' src='images/left.png' alt='' />");
      $("#dashboard").append("<img id='left_hover' src='images/left_hover.png' alt='' />");
      //right
      $("#dashboard").append("<img id='right' src='images/right.png' alt='' />");
      $("#dashboard").append("<img id='right_hover' src='images/right_hover.png' alt='' />");
      //brights
      $("#dashboard").append("<img id='brights' src='images/brights.png' alt='' />");
      $("#dashboard").append("<img id='brights_hover' src='images/brights_hover.png' alt='' />");
      //hazard up
      $("#dashboard").append("<img id='hazard_up' src='images/hazard_up.png' alt='' />");
      $("#dashboard").append("<img id='hazard_up_hover' src='images/hazard_up_hover.png' alt='' />");
      //M
      $("#dashboard").append("<img id='M' src='images/M.png' alt='' />");
      $("#dashboard").append("<img id='M_hover' src='images/M_hover.png' alt='' />");
      //G
      $("#dashboard").append("<img id='G' src='images/G.png' alt='' />");
      $("#dashboard").append("<img id='G_hover' src='images/G_hover.png' alt='' />");
      //P
      $("#dashboard").append("<img id='P' src='images/P.png' alt='' />");
      $("#dashboard").append("<img id='P_hover' src='images/P_hover.png' alt='' />");
      //C
      $("#dashboard").append("<img id='C' src='images/C.png' alt='' />");
      $("#dashboard").append("<img id='C_hover' src='images/C_hover.png' alt='' />");
      //Q
      $("#dashboard").append("<img id='Q' src='images/Q.png' alt='' />");
      $("#dashboard").append("<img id='Q_hover' src='images/Q_hover.png' alt='' />");
      //hazard down
      $("#dashboard").append("<img id='hazard_down' src='images/hazard_down.png' alt='' />");
      $("#dashboard").append("<img id='hazard_down_hover' src='images/hazard_down_hover.png' alt='' />");
      //hide hovers
      $("#left_hover").hide();
      $("#right_hover").hide();
      $("#brights_hover").hide();
      $("#hazard_up_hover").hide();
      $("#M_hover").hide();
      $("#G_hover").hide();
      $("#P_hover").hide();
      $("#C_hover").hide();
      $("#Q_hover").hide();
      $("#hazard_down_hover").hide();
      //hide nav for fade-in
      $("#hazard_up").hide()
      $("#M").hide();
      $("#G").hide();
      $("#P").hide();
      $("#C").hide();
      $("#Q").hide();
      $("#hazard_down").hide()
      //nav fade-in
      $("#hazard_up").delay(250).fadeIn(1000);
      $("#M").delay(250).fadeIn(1000);
      $("#G").delay(250).fadeIn(1000);
      $("#P").delay(250).fadeIn(1000);
      $("#C").delay(250).fadeIn(1000);
      $("#Q").delay(250).fadeIn(1000);
      $("#hazard_down").delay(250).fadeIn(1000);
      //debug
      $("#debug").html("<p>intro complete</p>");
    });

  }

  function leftClick(){
    $("#debug").html("<p>leftClick</p>")
    $("#dashboard").animate({left: "-33%"}, 500, "swing");
    $("#pistonL").animate({right: "+131%"}, 500, "swing");
    $("#pistonR").animate({left: "+61%"}, 500, "swing");
    $("#content").animate({left: "66%"}, 500, "swing");
    $("#passenger").animate({right: "33%"}, 500, "swing");
    $("#left_hover").show().delay(500).fadeOut(100);
  }

  function rightClick(){
    $("#debug").html("<p>rightClick</p>")
    $("#dashboard").animate({left: "+33%"}, 500, "swing");
    $("#pistonL").animate({right: "+61%"}, 500, "swing");
    $("#pistonR").animate({left: "+131%"}, 500, "swing");
    $("#content").animate({left: "33%"}, 500, "swing");
    $("#passenger").animate({right: "66%"}, 500, "swing");
    $("#right_hover").show().delay(500).fadeOut(100);
  }

  function brightsClick(){
    $("#debug").html("<p>brightsClick</p>")
    $("#dashboard").animate({left: "0px"}, 500, "swing");
    $("#pistonL").animate({right: "+90%"}, 500, "swing");
    $("#pistonR").animate({left: "+90%"}, 500, "swing");
    $("#content").animate({left: "50%"}, 500, "swing");
    $("#passenger").animate({right: "50%"}, 500, "swing");
    $("#brights_hover").show().delay(500).fadeOut(100);
  }

  function MClick(){
    $("#debug").html("<p>Movies</p>")
    clearContent();
    for(var i=movieLinks.length-1; i>=0; i--){
      $("#content").append("<iframe class='movieScreen' id='movie" + i + "' src='" + movieLinks[i] + "' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
      $("#content").append("<p class='movieCaption' id='caption" + i + "'>" + movieLinks[i] + "</p>");
      $("#movie"+i).hide().delay(500).fadeIn(500);
      $("#caption"+i).hide().delay(500).fadeIn(500);
    }
    clearHovers();
    $("#M_hover").show();
  }

  function GClick(){
    $("#debug").html("<p>Graphics</p>")
    clearContent();
    for(var i=0; i<25; i++){
      $("#content").append("<p id='graphic"+i+"'>Graphic "+i+"</p>")
      $("#graphic"+i).hide().delay(500).fadeIn(500);
    }
    clearHovers();
    $("#G_hover").show();
  }

  function PClick(){
    $("#debug").html("<p>Photos</p>")
    clearContent();
    for(var i=0; i<25; i++){
      $("#content").append("<p id='photo"+i+"'>Photo "+i+"</p>")
      $("#photo"+i).hide().delay(500).fadeIn(500);
    }
    clearHovers();
    $("#P_hover").show();
  }

  function CClick(){
    $("#debug").html("<p>Code</p>")
    clearContent();
    for(var i=0; i<25; i++){
      $("#content").append("<p id='code"+i+"'>Code "+i+"</p>")
      $("#code"+i).hide().delay(500).fadeIn(500);
    }
    clearHovers();
    $("#C_hover").show();
  }

  function QClick(){
    $("#debug").html("<p>?</p>")
    clearContent();
    clearHovers();
    $("#Q_hover").show();
  }

  function hazardUpClick(){
    $("#debug").html("<p>hazardUp</p>")
    if(!dashUp){
      $("#hazard_up_hover").show().delay(500).fadeOut(100);
      $("#dashboard").animate({top: "-68%"}, 500, "swing");
      $("#passenger").animate({bottom: "-8%"}, 500, "swing");
      $("#pistonL").animate({top: "-68%"}, 500, "swing");
      $("#pistonR").animate({top: "-68%"}, 500, "swing");
      dashUp = true;
    }
  }

  function hazardDownClick(){
    if(dashUp){
      $("#hazard_down_hover").show().delay(500).fadeOut(100);
      $("#dashboard").animate({top: "0px"}, 500, "easeOutBack");
      $("#passenger").animate({bottom: "-10px"}, 500, "swing");
      $("#pistonL").animate({top: "0px"}, 500, "easeOutBack");
      $("#pistonR").animate({top: "0px"}, 500, "easeOutBack");
      $("#logo").animate({top: "-5%"}, 625, "easeOutBack").animate({top: "-200px"}, 500, "swing");
      dashUp = false;
    }
  }

  function passengerText(text){

  }

  function clearHovers(){
    $("#M_hover").hide();
    $("#G_hover").hide();
    $("#P_hover").hide();
    $("#C_hover").hide();
    $("#Q_hover").hide();
  }

  function clearContent(){
    $("#content").html("");
  }

});
