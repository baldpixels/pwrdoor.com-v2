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

  var graphicLinks = [
    'Ace_eyes_close.jpg',
    'bonsai_logo.png',
    'columbia_airport_billboard.jpg',
    'ComEd_dashboard_mockup.png',
    'ComEd_mobile_mockup.png',
    'ComEd_sun.png',
    'COMMON_REED_blue.jpg',
    'COMMON_REED_yellow.png',
    'ink_01.jpg',
    'ink_02.jpg',
    'ink_03.jpg',
    'manet_copy.jpg',
    'mary_grace_legs.jpg',
    'movies.png',
    'purple_axe.png',
    'PWR_DOOR_logo.png',
    'PWR_DOOR_media_intro.gif',
    'PWR_DOOR_OFF_logo.png',
    'Q_logo_brail.png',
    'Q_logo_green.png',
    'Q_logo_lowercase.png',
    'Q_logo_yellow.png',
    'Q_slogan_yellow.png',
    'RED_filtered_light.jpg',
    'RED_original.jpg',
    'self_portrait.jpg',
    'still_life.jpg',
    'suburbs_mockup.jpg',
    'suburbs.jpg',
    'xinxi.png'
  ];

  var photoLinks = [
    'berries.jpg',
    'canyon_steam.jpg',
    'commerce_city.jpg',
    'coyote.jpg',
    'FORK.jpg',
    'lovers_pee.jpg',
    'mesa.jpg',
    'penny_purple.jpg',
    'ranger.jpg',
    'reach.jpg',
    'rocks_red.jpg',
    'shadows.jpg',
    'snow_scooter.jpg',
    'snowboard_sequence.png',
    'steamboat.jpg',
    'succulent.jpg'
  ];

  var codeLinks = [
    'http://www.pwrdoor.com'
  ];

$(document).ready(function(){
//local

//variables
  var portHeight = $("#port").height();
    var portWidth;

//on load
  updatePort();
  //load dashboard
  $("#dashboard").append("<img id='dash' src='images/dash.png' alt='' />");
  $("#port").append("<img id='passenger' src='images/passenger.png' alt='' />");
  $("#port").append("<img id='pistonL' src='images/pistonL.png' alt='' />");
  $("#port").append("<img id='pistonR' src='images/pistonR.png' alt='' />");

//event listeners
  //resize event
  $(window).resize(function() {
    portHeight = $("#port").height();
    updatePort();
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
      //move logo up
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
    });

  }

  function leftClick(){
    $("#dashboard").animate({left: "-33%"}, 500, "swing");
    $("#pistonL").animate({right: "+131%"}, 500, "swing");
    $("#pistonR").animate({left: "+61%"}, 500, "swing");
    $("#content").animate({left: "66%"}, 500, "swing");
    $("#content").css("z-index", "+6");
    $("#passenger").animate({right: "33%"}, 500, "swing");
    $("#left_hover").show().delay(500).fadeOut(100);
  }

  function rightClick(){
    $("#dashboard").animate({left: "+33%"}, 500, "swing");
    $("#pistonL").animate({right: "+61%"}, 500, "swing");
    $("#pistonR").animate({left: "+131%"}, 500, "swing");
    $("#content").animate({left: "33%"}, 500, "swing");
    $("#content").css("z-index", "+6");
    $("#passenger").animate({right: "66%"}, 500, "swing");
    $("#right_hover").show().delay(500).fadeOut(100);
  }

  function brightsClick(){
    $("#dashboard").animate({left: "0px"}, 500, "swing");
    $("#pistonL").animate({right: "+90%"}, 500, "swing");
    $("#pistonR").animate({left: "+90%"}, 500, "swing");
    $("#content").animate({left: "50%"}, 500, "swing");
    $("#content").css("z-index", "+2");
    $("#passenger").animate({right: "50%"}, 500, "swing");
    $("#brights_hover").show().delay(500).fadeOut(100);
  }

  function MClick(){
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
    clearContent();
    for(var i=graphicLinks.length-1; i>=0; i--){
      $("#content").append("<img class='graphicCanvas' id='graphic" + i + "' src='graphics/" + graphicLinks[i] + "' webkitallowfullscreen mozallowfullscreen allowfullscreen />");
      $("#content").append("<p class='graphicCaption' id='caption" + i + "'>" + graphicLinks[i] + "</p>");
      $("#graphic"+i).hide().delay(500).fadeIn(500);
      $("#caption"+i).hide().delay(500).fadeIn(500);
    }
    clearHovers();
    $("#G_hover").show();
  }

  function PClick(){
    clearContent();
    for(var i=photoLinks.length-1; i>=0; i--){
      $("#content").append("<img class='photoFrame' id='photo" + i + "' src='photos/" + photoLinks[i] + "' webkitallowfullscreen mozallowfullscreen allowfullscreen />");
      $("#content").append("<p class='photoCaption' id='caption" + i + "'>" + photoLinks[i] + "</p>");
      $("#photo"+i).hide().delay(500).fadeIn(500);
      $("#caption"+i).hide().delay(500).fadeIn(500);
    }
    clearHovers();
    $("#P_hover").show();
  }

  function CClick(){
    clearContent();
    for(var i=codeLinks.length-1; i>=0; i--){
      $("#content").append("<iframe class='codeBox' id='code" + i + "' src='" + codeLinks[i] + "' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
      $("#content").append("<p class='codeCaption' id='caption" + i + "'>" + codeLinks[i] + "</p>");
      $("#code"+i).hide().delay(500).fadeIn(500);
      $("#caption"+i).hide().delay(500).fadeIn(500);
    }
    clearHovers();
    $("#C_hover").show();
  }

  function QClick(){
    clearContent();
    clearHovers();
    $("#Q_hover").show();
    window.open('profile.html','_blank');
  }

  function hazardUpClick(){
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
