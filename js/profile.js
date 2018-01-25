"use strict";
//global

//variables

  $(document).ready(function(){
  //local

  //variables
    var portHeight = $("#port").height();
      var portWidth;

    updatePort();
    connor();

  //event listeners
    //resize event
    $(window).resize(function() {
      portHeight = $("#port").height();
      updatePort();
    });

  //functions
    function updatePort(){
      portWidth = .5625*portHeight;
      $("#port").css("width", portWidth + "px");
    }

    function connor(){
      $("#port").append("<img id='connor' src='images/connor.png' alt='' />");
      $("#port").append("<p class='statement'>Hello. Thanks for visiting my website. (I built the whole thing from scratch.)</p>");
    }

  });
