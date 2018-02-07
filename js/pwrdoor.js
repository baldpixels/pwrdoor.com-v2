"use strict";
//global

/***** variables *****/
  //boolean for hazardUp/hazardDown
  var dashUp = false;

  //boolean so intro only happens once
  var intro = true;

  //boolean so dash won't toggle before initial content is loaded
  var contentInit = false;
  //boolean to keep track of content z-index
  var contentForward = false;

  //port resize variables
  var portHeight,
    portWidth;

$(document).ready(function(){
//local

/***** on document load *****/
  updatePortSize();
  updateContentSize();
  //if(isPortrait()){}
  //if(isLandscape()){}
  $("#fullScreen").hide();
  $("#content").hide();
  //pre-load dashboard
  $("#dashboard").append("<img id='dash' src='images/dash.png' alt='' />");
  $("#port").append("<img id='passenger' src='images/passenger.png' alt='' />");
  $("#port").append("<img id='pistonL' src='images/pistonL.png' alt='' />");
  $("#port").append("<img id='pistonR' src='images/pistonR.png' alt='' />");

});

/***** functions *****/
  function updateDebug(){
    $("#debug").html("<p>debug</p>");
  }

/*** resizing functions ***/
  function updatePortSize(){
    portHeight = $("#port").height();
    //portWidth is calculated based on portHeight (i.e. window height)
    portWidth = .5625*portHeight;
    $("#port").css("width", portWidth + "px");
  }

  function updateContentSize(){
    //check if content is visibile, then resize
    if ($("#content").is(":visible")) {
      $("#content").css("width", $(window).width()*.66);
    } else{
      $("#content:hidden").css("width", $(window).width()*.66);
    }
    //check if movieScreen is visibile, then resize iframe
    if ($(".movieScreen").is(":visible")) {
      $(".movieScreen iframe").css("height", $(window).width()*.281);
    } else{
      $(".movieScreen iframe:hidden").css("height", $(window).width()*.281);
    }
    //check if codeBox is visibile, then resize iframe
    if ($(".codeBox").is(":visible")) {
      $(".codeBox iframe").css("height", $(window).width()*.281);
    } else{
      $(".codeBox iframe:hidden").css("height", $(window).width()*.281);
    }
  }

  function isPortrait() {
    return window.innerHeight > window.innerWidth;
  }

  function isLandscape() {
    return (window.orientation === 90 || window.orientation === -90);
  }
/*** end resizing functions ***/

  function pwrClick(){
    //pwrClick gets things started
    if (intro) {
      //move logo up
      $("#logo").attr("src", "images/logo_hover.png");
      $("#logo").animate({top: "-200px"}, 750, "swing", function(){
        introAnimation();
      });
      intro = false;
    }
  }

  function introAnimation(){
    //pull down dash
    $("#logo").attr("src", "images/logo.png");
    $("#passenger").animate({bottom: "-9px"}, 625, "swing");
    $("#pistonL").animate({top: "0px"}, 625, "easeOutBack");
    $("#pistonR").animate({top: "0px"}, 625, "easeOutBack");
    $("#logo").animate({top: "-5%"}, 625, "easeOutBack").animate({top: "-200px"}, 500, "swing");
    //once dash has moved down, append control icons
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
        var blinkTime = 150;
        $("#right_hover").fadeIn(blinkTime).delay(100).fadeOut(blinkTime).delay(100).fadeIn(blinkTime).delay(100).fadeOut(blinkTime);
        $("#left_hover").fadeIn(blinkTime).delay(100).fadeOut(blinkTime).delay(100).fadeIn(blinkTime).delay(100).fadeOut(blinkTime);
        $("#content").fadeIn(750);
      }, 750);
    });
  }
  //end introAnimation

  function leftClick(){
    //dash moves left
    $("#dashboard").animate({left: "-36%"}, 500, "swing");
    $("#pistonL").animate({right: "131%"}, 500, "swing");
    $("#pistonR").animate({left: "61%"}, 500, "swing");
    //passenger and content move right
    $("#content").animate({left: "63%"}, 500, "swing");
    $("#passenger").animate({right: "39%"}, 500, "swing");
    //logo should move left, too
    $("#logo").animate({left: "15.3%"}, 500, "swing");
    $("#left_hover").show().delay(500).fadeOut(100);
  }

  function rightClick(){
    //dash moves right
    $("#dashboard").animate({left: "33%"}, 500, "swing");
    $("#pistonL").animate({right: "61%"}, 500, "swing");
    $("#pistonR").animate({left: "131%"}, 500, "swing");
    //passenger and content move left
    $("#content").animate({left: "36%"}, 500, "swing");
    $("#passenger").animate({right: "61%"}, 500, "swing");
    //logo should move right, too
    $("#logo").animate({left: "83.3%"}, 500, "swing");
    $("#right_hover").show().delay(500).fadeOut(100);
  }

/*** content functions ***/
  //MOVIES
  function MClick(){
    //clear content box for new content
    clearContent();
    //clear control hovers, but show M_hover
    clearHovers();
    $("#M_hover").show();
    //toggle dash if content is not already in front
    if(!contentForward){
      toggleDash();
    }
    $("#brights_hover").fadeOut(333);
    contentInit = true;
    //append new content
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
      if (i === 0) {
        $("#content").append("<br>");
        $("#content").append("<br>");
        $("#content").append("<br>");
      }
    }
    //re-size content box and the movieScreen iframe
    updateContentSize();
  }

  //GRAPHICS
  function GClick(){
    //clear content box for new content
    clearContent();
    //clear control hovers, but show G_hover
    clearHovers();
    $("#G_hover").show();
    //toggle dash if content is not already in front
    if(!contentForward){
      toggleDash();
    }
    $("#brights_hover").fadeOut(333);
    contentInit = true;
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
          if (index === 0) {
            $("#content").append("<br>");
            $("#content").append("<br>");
            $("#content").append("<br>");
          }
        }
    }
    //new content is appended via preload()
    preload(graphicLinks.length-1);
  }

  //PHOTOS
  function PClick(){
    //clear content box for new content
    clearContent();
    //clear control hovers, but show P_hover
    clearHovers();
    $("#P_hover").show();
    //toggle dash if content is not already in front
    if(!contentForward){
      toggleDash();
    }
    $("#brights_hover").fadeOut(333);
    contentInit = true;
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
          if (index === 0) {
            $("#content").append("<br>");
            $("#content").append("<br>");
            $("#content").append("<br>");
          }
        }
    }
    //new content is appended via preload()
    preload(photoLinks.length-1);
  }

  //CODE
  function CClick(){
    //clear content box for new content
    clearContent();
    //clear control hovers, but show C_hover
    clearHovers();
    $("#C_hover").show();
    //toggle dash if content is not already in front
    if(!contentForward){
      toggleDash();
    }
    $("#brights_hover").fadeOut(333);
    contentInit = true;
    //append new content
    $("#content").append("<p id='contentHeader'>&lt;Code&gt;</p>");
    for(var i=codeLinks.length-1; i>=0; i--){
      if (codeLinks[i][1] === "iframe") {
        $("#content").append("<div class='codeBox' id='codeBox"+i+"'></div>");
        $("#codeBox"+i).append("<iframe id='code" + i + "' src='" + codeLinks[i][0] + "' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
        $("#content").append("<p class='codeCaption' id='caption" + i + "'><a href='"+codeLinks[i][0]+"' target='_blank'>" + codeLinks[i][0] + "</a></p>");
      }
      if (codeLinks[i][1] === "link") {
        $("#content").append("<p class='codeCaption' id='caption" + i + "'><a href='"+codeLinks[i][0]+"' target='_blank'>" + codeLinks[i][0] + "</a></p>");
      }
      $("#code"+i).hide().delay(500).fadeIn(500);
      $("#caption"+i).hide().delay(500).fadeIn(500);
      //buffer at the bottom
      if (i === 0) {
        $("#content").append("<br>");
        $("#content").append("<br>");
        $("#content").append("<br>");
      }
    }
    //re-size content box and the codeBox iframe
    updateContentSize();
  }

  //PROFILES
  function QClick(){
    //clear content box for new content
    clearContent();
    //clear control hovers, but show Q_hover
    clearHovers();
    $("#Q_hover").show();
    window.open("profiles.html","_blank");
  }
/*** end content functions ***/

  function hazardUpClick(){
    if (!dashUp) {
      //move dash up
      $("#hazard_up_hover").show().delay(500).fadeOut(100);
      $("#dashboard").animate({top: "-68%"}, 500, "swing");
      $("#pistonL").animate({top: "-68%"}, 500, "swing");
      $("#pistonR").animate({top: "-68%"}, 500, "swing");
      //except passenger, which shifts down slightly
      $("#passenger").animate({bottom: "-36px"}, 500, "swing");
      dashUp = true;
    }
  }

  function hazardDownClick(){
    if (dashUp) {
      //move dash down
      $("#hazard_down_hover").show().delay(500).fadeOut(100);
      $("#dashboard").animate({top: "0px"}, 500, "easeOutBack");
      $("#pistonL").animate({top: "0px"}, 500, "easeOutBack");
      $("#pistonR").animate({top: "0px"}, 500, "easeOutBack");
      //logo acts like its pushing the dash down
      $("#logo").animate({top: "-5%"}, 625, "easeOutBack").animate({top: "-200px"}, 500, "swing");
      //passenger shifts up slightly
      $("#passenger").animate({bottom: "-9px"}, 500, "swing");
      dashUp = false;
    }
  }

  function brightsClick(){
    if (contentInit) {
      toggleDash();
    }
    $("#brights_hover").show().delay(500).fadeOut(500);
  }

  function toggleDash(){
    var toggleTime = 250;
    //move passenger down
    $("#passenger").animate({bottom: "-36px"}, toggleTime, "swing");
    //and dash up
    $("#dashboard").animate({top: "-68%"}, toggleTime, "swing");
    $("#pistonL").animate({top: "-68%"}, toggleTime, "swing");
    $("#pistonR").animate({top: "-68%"}, toggleTime, "swing", function(){
      //toggle content's z-index
      if (contentForward) {
        $("#content").css("z-index", "+2");
        contentForward = false;
      } else{
        $("#content").css("z-index", "+6");
        contentForward = true;
      }
      //move dash back down
      $("#dashboard").animate({top: "0px"}, toggleTime, "easeOutBack");
      $("#pistonL").animate({top: "0px"}, toggleTime, "easeOutBack");
      $("#pistonR").animate({top: "0px"}, toggleTime, "easeOutBack");
      //logo still pretends to push
      $("#logo").animate({top: "-5%"}, (toggleTime+120), "easeOutBack").animate({top: "-200px"}, 500, "swing");
      //passenger shifts up slightly
      $("#passenger").animate({bottom: "-9px"}, toggleTime, "swing");
    });
  }

  function passengerText(text){
    //passenger talks to you
  }

/*** fullScreen functions ***/
  function fullScreenTip(){
    //appends fullScreenTip right below the contentHeader
    $("#content").append("<p id='fullScreenTip'>(click image for fullscreen)</p>");
    $("#fullScreenTip").hide().delay(250).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).delay(3000).fadeOut(1000);
  }

  function fullScreenPhoto(){
    var photoSrc = $(this).attr("src");
    $("#fullScreen").fadeIn(500);
    $("#fullScreen img").attr("src", photoSrc)
    //center img if its width is less than the window width
    if ($(window).width() < $("#fullScreen img").width()) {
      $("#fullScreen img").css("left", 0);
    } else {
      var leftShift = ($(window).width() - $("#fullScreen img").width())*.5;
      $("#fullScreen img").css("left", leftShift);
    }
    fullScreenExitTip()
    $("#fullScreen").animate({top: "0px"}, 500, "swing");
  }

  function fullScreenGraphic(){
    var graphicSrc = $(this).attr("src");
    $("#fullScreen").fadeIn(500);
    $("#fullScreen img").attr("src", graphicSrc)
    //center img if its width is less than the window width
    if ($(window).width() < $("#fullScreen img").width()) {
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
    //appends fullScreenExitTip toward the bottom of the fullScreen
    //first, check if fullScreenExitTip has already been appended once
    if (!$("#fullScreen").find("#fullScreenExitTip").length) {
      $("#fullScreen").append("<p id='fullScreenExitTip'>(click image to return)</p>");
      $("#fullScreen").hide();
    } else{
      $("#fullScreenExitTip").delay(1000).fadeIn(500).fadeOut(500).fadeIn(500);
    }
  }
/*** end fullScreen functions ***/

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
