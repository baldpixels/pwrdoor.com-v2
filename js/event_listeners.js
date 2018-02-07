"use strict";
//global

/***** event listeners *****/
  //resize event
  $(window).resize(function() {
    portHeight = $("#port").height();
    updatePortSize();
    updateContentSize();
  });

  //orientation change event (mobile)
  $(window).on("orientationchange", function() {
    if (isPortrait()) {
      //portraitMode();
    }
    if (isLandscape()) {
      //landscapeMode();
    }
    updatePortSize();
    updateContentSize();
  });

/*** click and hover events ***/
  //intro event
  $("#logo").click(pwrClick);
    $("#logo").hover(function(){
      this.src = "images/logo_hover.png";
    },function(){
      this.src = "images/logo.png";
    });

  //dash control events
  $("#dashboard").on("click", "#left", leftClick);
  $("#dashboard").on("click", "#right", rightClick);
  $("#dashboard").on("click", "#brights", brightsClick);
  $("#dashboard").on("click", "#hazard_up", hazardUpClick);
  $("#dashboard").on("click", "#hazard_down", hazardDownClick);

  //content events
  $("#dashboard").on("click", "#M", MClick);
  $("#dashboard").on("click", "#G", GClick);
  $("#dashboard").on("click", "#P", PClick);
  $("#dashboard").on("click", "#C", CClick);
  $("#dashboard").on("click", "#Q", QClick);
  //bring content forward if clicked and if dash is in front
  $("#content").on("click", function(){
    if (!contentForward) {
      toggleDash();
    }
  });

  //fullScreen events
  $("#content").on("click", ".photoFrame img", fullScreenPhoto);
  $("#content").on("click", ".graphicCanvas img", fullScreenGraphic);
  $("body").on("click", "#fullScreen", fullScreenOff);
