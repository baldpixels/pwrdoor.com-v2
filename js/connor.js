"use strict";
//global

//variables

  $(document).ready(function() {
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
    function updatePort() {
      portWidth = .5625*portHeight;
      $("#port").css("width", portWidth + "px");
    }

    function connor() {
      $("#port").append("<img id='connor' src='images/connor.jpg' alt='' />");
      $("#content").append("<p class='statement'>Thanks for taking a look at my website.</p>");
      $("#content").append("<p class='statement'>I built the whole thing from scratch, and if you're curious, <a href='https://github.com/baldpixels/baldpixels.github.io' target='_blank'>here's all the code</a>.</p>");
      $("#content").append("<p class='statement'>Most of my projects are personal, but occasionally I'll freelance.</p>");
      $("#content").append("<p class='statement'>Here are some tools I know how to use:</p>");
      //update skills here
      var skills = "<ul><li>HTML5, CSS, JavaScript</li> <li>jQuery, AngularJS, Node.js</li> <li>PHP, Apache + MySQL</li> <li>Java Development and Python Scripting</li> <li>Adobe Premiere & After Effects</li> <li>Photoshop & Illustrator</li> <li>Git and Linux</li></ul>";
      $("#content").append(skills);
      $("#content").append("<p class='statement'><a href='mailto:baldpixels@gmail.com' targe='_top'>baldpixels@gmail.com</a></p>");
      $("#content").append("<p class='statement'><a href='https://github.com/baldpixels/' target='_blank'>github.com/baldpixels</a></p>");
      $("#content").append("<p class='statement'><a href='https://vimeo.com/pwrdoor' target='_blank'>vimeo.com/pwrdoor</a></p>");
      $("#content").append("<p class='statement'><a href='https://www.instagram.com/pwrdoor/' target='_blank'>instagram.com/pwrdoor</a></p>");
      //now for some advanced lettering
      letter();
    }

    function letter() {

    }

  });
