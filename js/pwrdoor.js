"use strict";
//global

//variables
  var fps = 24;
    var frameTime = (1000 / 24);
  var dashUp = false;
  var intro = true;
  var contentInit = false;

  var movieLinks = [
    ['https://player.vimeo.com/video/173084329', 'What We Want', 'Part 1 of 2. I own literally none of this media.'],
    ['https://player.vimeo.com/video/177589535', 'livin', 'Part 2 of 2. I own literally none of this media.'],
    ['https://player.vimeo.com/video/214244680', 'Out of Place', 'A small adventure tale across the desert, mountains, and stars -- dedicated to the National Park Service'],
    ['https://player.vimeo.com/video/251344926', 'Ventus', "Follow the wind and water of the Colorado Front Range. <br><br> Here's why Denver has some crazy weather patterns: <a href='http://www.theweatherprediction.com/weatherpapers/013/' target='_blank'>theweatherprediction.com/weatherpapers/013/</a> <br><br> Submitted to 'la semaine du son' video competition: <a href='https://www.facebook.com/concourslasemaineduson/?hc_ref=ARTjB8RYwLvBVbWxO-OkM3CA7oINdkD3TpJkexEVOIjjWrzObH7fEvdNWE1onDVnzV8&fref=nf&pnref=story' target='_blank'>facebook.com/concourslasemaineduson/</a>"],
    ['https://player.vimeo.com/video/251346464', 'Fernweh', "Sometimes you think you're exactly where you want to be. <br><br> CMF Jury Award: <a href='https://www.campusmoviefest.com/movies/60033-fernweh' target='_blank'>campusmoviefest.com/movies/60033-fernweh</a>"],
  ];

  var graphicLinks = [
    'COMMON_REED_blue.jpg',
    'COMMON_REED_yellow.png',
    'self_portrait.jpg',
    'ink_01.jpg',
    'ink_02.jpg',
    'ink_03.jpg',
    'Ace_eyes_closed.jpg',
    'manet_copy.jpg',
    'mary_grace_legs.jpg',
    'purple_axe.png',
    'ComEd_dashboard_mockup.png',
    'ComEd_mobile_mockup.png',
    'ComEd_sun.png',
    'movies.png',
    'xinxi.png',
    'PWR_DOOR_logo.png',
    'PWR_DOOR_media_intro.gif',
    'PWR_DOOR_OFF_logo.png',
    'bonsai_logo.png',
    'columbia_airport_billboard.jpg',
    'Q_logo_brail.png',
    'Q_logo_lowercase.png',
    'Q_logo_green.png',
    'Q_logo_yellow.png',
    'Q_slogan_yellow.png',
    'RED_filtered_light.jpg',
    'RED_original.jpg',
    'still_life.jpg',
    'suburbs_mockup.jpg',
    'suburbs.jpg'
  ];

  var photoLinks = [
    'berries.jpg',
    'lovers_pee.jpg',
    'penny_purple.jpg',
    'reach.jpg',
    'coyote.jpg',
    'rocks_red.jpg',
    'canyon_steam.jpg',
    'ranger.jpg',
    'mesa.jpg',
    'FORK.jpg',
    'commerce_city.jpg',
    'shadows.jpg',
    'snow_scooter.jpg',
    'snowboard_sequence.jpg',
    'steamboat.jpg',
    'succulent.jpg',
    'potatoes.jpg',
    'annuals.jpg',
    'lily_pads.jpg',
    'harbor.jpg',
    'superior-frozen.jpg',
    'ice_1.jpg'
  ];

  var codeLinks = [
    ['http://www.pwrdoor.com', 'iframe'],
    ['http://github.com/baldpixels', 'link'],
    ['https://bitbucket.org/baldpixels/', 'link']
  ];

$(document).ready(function(){
//local

//variables
  var portHeight = $("#port").height();
    var portWidth;
  var contentHeight = $("#content").height();
    var contentWidth = $("#content").width();

/***** on load *****/
  updatePort();
  updateContent();
  //if(isPortrait()){}
  //if(isLandscape()){}
  $("#fullScreen").hide();
  $("#content").hide();
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
    updateContent();
  });

  //orientation change event (mobile)
  $(window).on('orientationchange', function() {
    if (isPortrait()) {
      //portraitMode();
    }
    if (isLandscape()) {
      //landscapeMode();
    }
    updatePort();
    updateContent();
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

  $("#content").on('click', '.photoFrame img', fullScreenPhoto);

  $("#content").on('click', '.graphicCanvas img', fullScreenGraphic);

  $("body").on('click', '#fullScreen', fullScreenOff);

//functions
  function updateDebug(){
    $("#debug").html("<p>debug</p>");
  }

  function updatePort(){
    portWidth = .5625*portHeight;
    $("#port").css("width", portWidth + "px");
  }

  function updateContent(){
    if($("#content").is(":visible")){
      $("#content").css("width", $(window).width()*.66);
    } else{
      $("#content:hidden").css("width", $(window).width()*.66);
    }
    //resize movieScreen iframe
    if($(".movieScreen").is(":visible")){
      $(".movieScreen iframe").css("height", $(window).width()*.281);
    } else{
      $(".movieScreen iframe:hidden").css("height", $(window).width()*.281);
    }
    //resize codeBox iframe
    if($(".codeBox").is(":visible")){
      $(".codeBox iframe").css("height", $(window).width()*.281);
    } else{
      $(".codeBox iframe:hidden").css("height", $(window).width()*.281);
    }
  }

  function pwrClick(){
    if(intro){
      //move logo up
      $("#logo").attr('src', "images/logo_hover.png");
      $("#logo").animate({top: "-200px"}, 750, "swing", function(){
        introAnimation();
      });
      intro = false;
    }
  }

  function introAnimation(){
    $("#logo").attr('src', "images/logo.png");
    $("#passenger").animate({bottom: "-24px"}, 625, "swing");
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
      //blink animation
      setTimeout(function(){
        var blinkTime = 250;
        $("#right_hover").fadeIn(blinkTime).fadeOut(blinkTime);
        $("#left_hover").fadeIn(blinkTime, function(){
          $("#left_hover").fadeOut(blinkTime);
          $("#hazard_down_hover").delay(blinkTime).fadeIn(blinkTime).fadeOut(blinkTime);
          $("#hazard_up_hover").delay(blinkTime).fadeIn(blinkTime, function(){
            $("#hazard_up_hover").fadeOut(blinkTime);
            $("#brights_hover").delay(blinkTime).fadeIn(blinkTime, function(){
              $("#brights_hover").fadeOut(blinkTime, function(){
                $("#right_hover").delay(blinkTime).fadeIn(blinkTime).delay(blinkTime).fadeOut(blinkTime);
                $("#left_hover").delay(blinkTime).fadeIn(blinkTime).delay(blinkTime).fadeOut(blinkTime);
                $("#hazard_down_hover").delay(blinkTime).fadeIn(blinkTime).delay(blinkTime).fadeOut(blinkTime);
                $("#hazard_up_hover").delay(blinkTime).fadeIn(blinkTime).delay(blinkTime).fadeOut(blinkTime);
                $("#brights_hover").delay(blinkTime).fadeIn(blinkTime).delay(blinkTime*5).fadeOut(blinkTime*2);
              });
            });
          });
        });
        //display content
        $("#content").fadeIn(500);
      }, 750);
    });
  }

  function leftClick(){
    $("#dashboard").animate({left: "-33%"}, 500, "swing");
    $("#pistonL").animate({right: "131%"}, 500, "swing");
    $("#pistonR").animate({left: "61%"}, 500, "swing");
    $("#content").animate({left: "66%"}, 500, "swing");
    if(contentInit){
      $("#content").css("z-index", "+6");
      $("#brights_hover").fadeOut(333);
    }
    $("#passenger").animate({right: "33%"}, 500, "swing");
    $("#logo").animate({left: "16.6%"}, 500, "swing");
    $("#left_hover").show().delay(500).fadeOut(100);
  }

  function rightClick(){
    $("#dashboard").animate({left: "33%"}, 500, "swing");
    $("#pistonL").animate({right: "61%"}, 500, "swing");
    $("#pistonR").animate({left: "131%"}, 500, "swing");
    $("#content").animate({left: "33%"}, 500, "swing");
    if(contentInit){
      $("#content").css("z-index", "+6");
      $("#brights_hover").fadeOut(333);
    }    $("#passenger").animate({right: "66%"}, 500, "swing");
    $("#logo").animate({left: "83.3%"}, 500, "swing");
    $("#right_hover").show().delay(500).fadeOut(100);
  }

  function brightsClick(){
    $("#brights_hover").show();
    if(contentInit){
      toggleDash();
    }
  }

  function MClick(){
    clearContent();
    clearHovers();
    toggleDash();
    $("#brights_hover").fadeOut(333);
    contentInit = true;
    $("#M_hover").show();
    $("#content").append("<p id='contentHeader'>Movies</p>");
    for(var i=movieLinks.length-1; i>=0; i--){
      $("#content").append("<p class='movieTitle' id='title" + i + "'>" + movieLinks[i][1] + "</p>");
      $("#content").append("<div class='movieScreen' id='movieScreen"+i+"'></div>");
      $("#movieScreen"+i).append("<iframe id='movie" + i + "' src='" + movieLinks[i][0] + "' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
      $("#content").append("<p class='movieCaption' id='caption" + i + "'>" + movieLinks[i][2] + "</p>");
      $("#movie"+i).hide().delay(500).fadeIn(500);
      $("#caption"+i).hide().delay(500).fadeIn(500);
      $("#title"+i).hide().delay(500).fadeIn(500);
      //buffer at the bottom
      if(i==0){
        $("#content").append("<br>");
        $("#content").append("<br>");
        $("#content").append("<br>");
      }
    }
    $(".movieScreen iframe").css("height", $(window).width()*.281);
  }

  function GClick(){
    clearContent();
    clearHovers();
    toggleDash();
    $("#brights_hover").fadeOut(333);
    contentInit = true;
    $("#G_hover").show();
    $("#content").append("<p id='contentHeader'>Graphics</p>");
    fullScreenTip();
    //optimized loading
    function preload(index) {
        if (index >= 0) {
          var $img = $("<img id='graphic" + index + "' src='graphics/" + graphicLinks[index] + "' />");
          $("#content").append("<div class='graphicCanvas' id='graphicCanvas"+index+"'></div>");
          $("#graphicCanvas"+index).append($img);
          $("#content").append("<p class='graphicCaption' id='caption" + index + "'>" + graphicLinks[index] + "</p>");
          $("#graphic"+index).hide().fadeIn(500);
          $("#caption"+index).hide().fadeIn(500);
          //once this image is loaded, load the next one
          $img.on('load', function() {
              preload(index-1);
          });
          //buffer at the bottom
          if(index==0){
            $("#content").append("<br>");
            $("#content").append("<br>");
            $("#content").append("<br>");
          }
        }
    }
    preload(graphicLinks.length-1);
  }

  function PClick(){
    clearContent();
    clearHovers();
    toggleDash();
    $("#brights_hover").fadeOut(333);
    contentInit = true;
    $("#P_hover").show();
    $("#content").append("<p id='contentHeader'>Photos</p>");
    fullScreenTip();
    //optimized loading
    function preload(index) {
        if (index >= 0) {
          var $img = $("<img id='photo" + index + "' src='photos/" + photoLinks[index] + "' />");
          $("#content").append("<div class='photoFrame' id='photoFrame"+index+"'></div>");
          $("#photoFrame"+index).append($img);
          $("#content").append("<p class='photoCaption' id='caption" + index + "'>" + photoLinks[index] + "</p>");
          $("#photo"+index).hide().fadeIn(500);
          $("#caption"+index).hide().fadeIn(500);
          //once this image is loaded, load the next one
          $img.on('load', function() {
              preload(index-1);
          });
          //buffer at the bottom
          if(index==0){
            $("#content").append("<br>");
            $("#content").append("<br>");
            $("#content").append("<br>");
          }
        }
    }
    preload(photoLinks.length-1);
  }

  function CClick(){
    clearContent();
    clearHovers();
    toggleDash();
    $("#brights_hover").fadeOut(333);
    contentInit = true;
    $("#C_hover").show();
    $("#content").append("<p id='contentHeader'>&lt;Code&gt;</p>");
    for(var i=codeLinks.length-1; i>=0; i--){
      if(codeLinks[i][1]=='iframe'){
        $("#content").append("<div class='codeBox' id='codeBox"+i+"'></div>");
        $("#codeBox"+i).append("<iframe id='code" + i + "' src='" + codeLinks[i][0] + "' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
        $("#content").append("<p class='codeCaption' id='caption" + i + "'><a href='"+codeLinks[i][0]+"' target='_blank'>" + codeLinks[i][0] + "</a></p>");
      }
      if(codeLinks[i][1]=='link'){
        $("#content").append("<p class='codeCaption' id='caption" + i + "'><a href='"+codeLinks[i][0]+"' target='_blank'>" + codeLinks[i][0] + "</a></p>");
      }
      $("#code"+i).hide().delay(500).fadeIn(500);
      $("#caption"+i).hide().delay(500).fadeIn(500);
      //buffer at the bottom
      if(i==0){
        $("#content").append("<br>");
        $("#content").append("<br>");
        $("#content").append("<br>");
      }
    }
    $(".codeBox iframe").css("height", $(window).width()*.281);
  }

  function QClick(){
    clearContent();
    clearHovers();
    $("#Q_hover").show();
    window.open('profiles.html','_blank');
  }

  function hazardUpClick(){
    if(!dashUp){
      $("#hazard_up_hover").show().delay(500).fadeOut(100);
      $("#dashboard").animate({top: "-68%"}, 500, "swing");
      $("#passenger").animate({bottom: "-48px"}, 500, "swing");
      $("#pistonL").animate({top: "-68%"}, 500, "swing");
      $("#pistonR").animate({top: "-68%"}, 500, "swing");
      dashUp = true;
    }
  }

  function hazardDownClick(){
    if(dashUp){
      $("#hazard_down_hover").show().delay(500).fadeOut(100);
      $("#dashboard").animate({top: "0px"}, 500, "easeOutBack");
      $("#passenger").animate({bottom: "-24px"}, 500, "swing");
      $("#pistonL").animate({top: "0px"}, 500, "easeOutBack");
      $("#pistonR").animate({top: "0px"}, 500, "easeOutBack");
      $("#logo").animate({top: "-5%"}, 625, "easeOutBack").animate({top: "-200px"}, 500, "swing");
      dashUp = false;
    }
  }

  function toggleDash(){
    var toggleTime = 250;
    //re-center dash
    $("#dashboard").animate({left: "0px"}, 500, "swing");
    $("#pistonL").animate({right: "90%"}, 500, "swing");
    $("#pistonR").animate({left: "90%"}, 500, "swing");
    $("#content").animate({left: "50%"}, 500, "swing");
    $("#passenger").animate({right: "50%"}, 500, "swing");
    $("#logo").animate({left: "50%"}, 500, "swing", function(){
      //move dash up
      $("#dashboard").animate({top: "-68%"}, toggleTime, "swing");
      $("#passenger").animate({bottom: "-48px"}, toggleTime, "swing");
      $("#pistonL").animate({top: "-68%"}, toggleTime, "swing");
      $("#pistonR").animate({top: "-68%"}, toggleTime, "swing", function(){
        if($("#content").css("z-index")==6){
          $("#content").css("z-index", "+2");
        } else{
          $("#content").css("z-index", "+6");
        }
        //move dash back down
        $("#dashboard").animate({top: "0px"}, toggleTime, "easeOutBack");
        $("#passenger").animate({bottom: "-24px"}, toggleTime, "swing");
        $("#pistonL").animate({top: "0px"}, toggleTime, "easeOutBack");
        $("#pistonR").animate({top: "0px"}, toggleTime, "easeOutBack");
        $("#logo").animate({top: "-5%"}, (toggleTime+120), "easeOutBack").animate({top: "-200px"}, 500, "swing");
      });
    });
  }

  function passengerText(text){

  }

  function fullScreenTip(){
    $("#content").append("<p id='fullScreenTip'>(click image for fullscreen)</p>");
    $("#fullScreenTip").hide().delay(250).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).delay(3000).fadeOut(1000);
  }

  function fullScreenPhoto(){
    var photoSrc = $(this).attr('src');
    $("#fullScreen").fadeIn(500);
    $("#fullScreen img").attr("src", photoSrc)
    //center img if its width is less than the window width
    if($(window).width() < $("#fullScreen img").width()){
      $("#fullScreen img").css("left", 0);
    } else {
      var leftShift = ($(window).width() - $("#fullScreen img").width())*.5;
      $("#fullScreen img").css("left", leftShift);
    }
    fullScreenExitTip()
    $("#fullScreen").animate({top: "0px"}, 500, "swing");
  }

  function fullScreenGraphic(){
    var graphicSrc = $(this).attr('src');
    $("#fullScreen").fadeIn(500);
    $("#fullScreen img").attr("src", graphicSrc)
    //center img if its width is less than the window width
    if($(window).width() < $("#fullScreen img").width()){
      $("#fullScreen img").css("left", 0);
    } else {
      var leftShift = ($(window).width() - $("#fullScreen img").width())*.5;
      $("#fullScreen img").css("left", leftShift);
    }
    fullScreenExitTip();
    $("#fullScreen").animate({top: "0px"}, 500, "swing");
  }

  function fullScreenOff(){
    $("#fullScreen").animate({top: "-100%"}, 500, "swing");
    $("#fullScreen").fadeOut(500);
    $("#fullScreenExitTip").fadeOut(500);
  }

  function fullScreenExitTip(){
    if(!$("#fullScreen").find("#fullScreenExitTip").length){
      $("#fullScreen").append("<p id='fullScreenExitTip'>(click image to return)</p>");
      $("#fullScreen").hide();
    } else{
      $("#fullScreenExitTip").delay(1000).fadeIn(500).fadeOut(500).fadeIn(500);
    }
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

  function isPortrait() {
    return window.innerHeight > window.innerWidth;
  }

  function isLandscape() {
    return (window.orientation === 90 || window.orientation === -90);
  }

});
