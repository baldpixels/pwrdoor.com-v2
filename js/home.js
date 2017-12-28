"use strict";
//global

$(document).ready(function(){
//local

  $("#homeBG").hide();

  //nav listeners and hover functions
  $("#logo").click(pwrClick);
  $("#logo").hover(function(){
    this.src = "images/logo_hover.png";
  });
  $("#logo").mouseleave(function(){
    this.src = "images/logo.png";
  });

  //pwrClick moves stuff around
  function pwrClick(){
    navFadeIn();
  }

    //animations and effects
    function navFadeIn(){
      $("#homeBG").fadeIn(500);
    }

});
