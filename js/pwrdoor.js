"use strict";
//global

//variables

$(document).ready(function(){
//local

//variables
  var portHeight = $("#port").height();
    var portWidth;

//on load

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
  //pwrClick moves stuff around
  function pwrClick(){
  }


});
