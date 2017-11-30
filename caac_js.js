$.get("caacsvg2.svg", function(data) {

  var svgdata = data.documentElement; //create variable so we can apply attributes
    $(".svgcontainer").append(svgdata); //apppend to variable

  init();
});

//INITIAL PAGE ANIMATION

      $(document).ready(function() {

        setTimeout(function() {
          $('#heightclick').fadeIn(1000,"swing");
        },3000);

        setTimeout(function() {
          $('#heightclick').fadeOut(1000,"swing");
        },4000);

        setTimeout(function() {
          $('#diameterclick').fadeIn(1000,"swing");
        },5000);

        setTimeout(function() {
          $('#diameterclick').fadeOut(1000,"swing");
        },6000);

        setTimeout(function() {
          $('#colorclick').fadeIn(1000,"swing");
        },7000);

        setTimeout(function() {
          $('#colorclick').fadeOut(1000,"swing");
        },8000);

      })


function init() {
  /* Add JavaScript here */

  //INITIAL PAGE ANIMATION

  //INDIVIDUAL UMBRELLA HOVERS

      $('#u1').mouseenter(function() {
        $('#i1').show();
      });

      $('#u1').mouseleave(function() {
        $('#i1').hide();
      });

      $('#u2').mouseenter(function() {
        $('#i2').show();
      });

      $('#u2').mouseleave(function() {
        $('#i2').hide();
      });

      $('#u3').mouseenter(function() {
        $('#i3').show();
      });

      $('#u3').mouseleave(function() {
        $('#i3').hide();
      });

      $('#u4').mouseenter(function() {
        $('#i4').show();
      });

      $('#u4').mouseleave(function() {
        $('#i4').hide();
      });

      $('#u5').mouseenter(function() {
        $('#i5').show();
      });

      $('#u5').mouseleave(function() {
        $('#i5').hide();
      });

      $('#u6').mouseenter(function() {
        $('#i6').show();
      });

      $('#u6').mouseleave(function() {
        $('#i6').hide();
      });

      $('#u7').mouseenter(function() {
        $('#i7').show();
      });

      $('#u7').mouseleave(function() {
        $('#i7').hide();
      });

      $('#u8').mouseenter(function() {
        $('#i8').show();
      });

      $('#u8').mouseleave(function() {
        $('#i8').hide();
      });

      $('#u9').mouseenter(function() {
        $('#i9').show();
      });

      $('#u9').mouseleave(function() {
        $('#i9').hide();
      });

      $('#u10').mouseenter(function() {
        $('#i10').show();
      });

      $('#u10').mouseleave(function() {
        $('#i10').hide();
      });

      $('#u11').mouseenter(function() {
        $('#i11').show();
      });

      $('#u11').mouseleave(function() {
        $('#i11').hide();
      });

      $('#u12').mouseenter(function() {
        $('#i12').show();
      });

      $('#u12').mouseleave(function() {
        $('#i12').hide();
      });

      $('#u13').mouseenter(function() {
        $('#i13').show();
      });

      $('#u13').mouseleave(function() {
        $('#i13').hide();
      });

      $('#u14').mouseenter(function() {
        $('#i14').show();
      });

      $('#u14').mouseleave(function() {
        $('#i14').hide();
      });



  //FULL DISPLAY BUTTON

      $('#heightbutton').mouseenter(function() {
        $('#heighthover').fadeIn();
      });

      $('#heighthover').mouseleave(function() {
        $('#heighthover').fadeOut();
      });

      $('#heighthover').click(function() {

        //TURN OFF DIAMETER
        $('#diameterclick').hide();
        $('#diameterlegend').hide();
        $('#diameteron').hide();
        $('#diameteroff').show();
        $('#diameter7').fadeOut();
        $('#diameter9').fadeOut();
        $('#diameter11').fadeOut();
        $('#diameter13').fadeOut();
        $('#diameter15').fadeOut();
        $('#emptydiameterchart').hide();

        //TURN OFF COLOR
        $('#colorclick').hide();
        $('#colorlegend').hide();
        $('#coloron').hide();
        $('#coloroff').show();
        $('#coloryellow').fadeOut();
        $('#colororange').fadeOut();
        $('#colorpink').fadeOut();
        $('#colorblue').fadeOut();
        $('#colorred').fadeOut();
        $('#colorpurple').fadeOut();
        $('#colorgreen').fadeOut();
        $('#emptycolorchart').hide();

        //TURN HEIGHT ON
        $('#heightclick').fadeIn();
        $('#heightlegend').fadeIn();
        $('#heighton').show();
        $('#heightoff').hide();
        $('#heightoffhover').hide();
        $('#height3m').fadeIn();
        $('#height4m').fadeIn();
        $('#height5m').fadeIn();
        $('#height6m').fadeIn();
        $('#height7m').fadeIn();
      });

      $('#heightclick').click(function() {
        $('#heightclick').fadeOut("fast");
        $('#heightlegend').hide();
        $('#height3m').hide();
        $('#height4m').hide();
        $('#height5m').hide();
        $('#height6m').hide();
        $('#height7m').hide();
        $('#emptyheightchart').show();
      });

      $('#heighton').click(function() {
        $('#heightclick').fadeIn();
        $('#heightlegend').fadeIn();
        $('#heighton').fadeIn();
        $('#height3m').fadeIn();
        $('#height4m').fadeIn();
        $('#height5m').fadeIn();
        $('#height6m').fadeIn();
        $('#height7m').fadeIn();
      });


    //PIE CHART INTERACTIVITY
        $('#emptyheight3').mouseenter(function() {
          $('#slice3m').show();
          $('#height3m').show();
          $('#height3mtext').show();
        });

        $('#slice3m').mouseleave(function() {
          $('#slice3m').hide();
          $('#height3m').hide();
          $('#height3mtext').hide();
        });

        $('#emptyheight4').mouseenter(function() {
          $('#slice4m').show();
          $('#height4m').show();
          $('#height4mtext').show();
        });

        $('#slice4m').mouseleave(function() {
          $('#slice4m').hide();
          $('#height4m').hide();
          $('#height4mtext').hide();
        });

        $('#emptyheight5').mouseenter(function() {
          $('#slice5m').show();
          $('#height5m').show();
          $('#height5mtext').show();
        });

        $('#slice5m').mouseleave(function() {
          $('#slice5m').hide();
          $('#height5m').hide();
          $('#height5mtext').hide();
        });

        $('#emptyheight6').mouseenter(function() {
          $('#slice6m').show();
          $('#height6m').show();
          $('#height6mtext').show();
        });

        $('#slice6m').mouseleave(function() {
          $('#slice6m').hide();
          $('#height6m').hide();
          $('#height6mtext').hide();
        });

        $('#emptyheight7').mouseenter(function() {
          $('#slice7m').show();
          $('#height7m').show();
          $('#height7mtext').show();
        });

        $('#slice7m').mouseleave(function() {
          $('#slice7m').hide();
          $('#height7m').hide();
          $('#height7mtext').hide();
        });



    //OLD -- FOR SHOWING HEIGHT BUTTON ON
        //$('#heightclick').click(function() {
          //$('#heightclick').hide();
          //$('#umbrellaheights').hide();
        //});




  //DIAMETER BUTTON INTERACTIVITY

    //TURNING CHART ON

    $('#diameterbutton').mouseenter(function() {
      $('#diameterhover').fadeIn();
    });

    $('#diameterhover').mouseleave(function() {
      $('#diameterhover').hide();
    });

    $('#diameterhover').click(function() {

      //TURN OFF HEIGHT
      $('#heightclick').hide();
      $('#heightlegend').hide();
      $('#heighton').hide();
      $('#heightoff').show();
      $('#height3m').fadeOut();
      $('#height4m').fadeOut();
      $('#height5m').fadeOut();
      $('#height6m').fadeOut();
      $('#height7m').fadeOut();
      $('#emptyheightchart').hide();

      //TURN OFF COLOR
      $('#colorclick').hide();
      $('#colorlegend').hide();
      $('#coloron').hide();
      $('#coloroff').show();
      $('#coloryellow').fadeOut();
      $('#colororange').fadeOut();
      $('#colorpink').fadeOut();
      $('#colorblue').fadeOut();
      $('#colorred').fadeOut();
      $('#colorpurple').fadeOut();
      $('#colorgreen').fadeOut();
      $('#emptycolorchart').hide();

      //TURN ON DIAMETER

      $('#diameterclick').fadeIn();
      $('#diameterlegend').fadeIn();
      $('#diameteron').fadeIn();
      $('#diameteroff').hide();
      $('#diameteroffhover').hide();
      $('#diameter7').fadeIn();
      $('#diameter9').fadeIn();
      $('#diameter11').fadeIn();
      $('#diameter13').fadeIn();
      $('#diameter15').fadeIn();
    });

    $('#diameterclick').click(function() {
      $('#diameterclick').fadeOut("fast");
      $('#diameterlegend').hide();
      $('#diameter7').hide();
      $('#diameter9').hide();
      $('#diameter11').hide();
      $('#diameter13').hide();
      $('#diameter15').hide();
      $('#emptydiameterchart').show();
    });

    $('#diameteron').click(function() {
      $('#diameterclick').fadeIn();
      $('#diameterlegend').fadeIn();
      $('#diameter7').fadeIn();
      $('#diameter9').fadeIn();
      $('#diameter11').fadeIn();
      $('#diameter13').fadeIn();
      $('#diameter15').fadeIn();
    });

    //PIE CHART INTERACTIVITY

        $('#emptydiameter7').mouseenter(function() {
          $('#sliced7m').show();
          $('#diameter7').show();
          $('#diameter7mtext').show();
        });

        $('#sliced7m').mouseleave(function() {
          $('#sliced7m').hide();
          $('#diameter7').hide();
          $('#diameter7mtext').hide();
        });

        $('#emptydiameter9').mouseenter(function() {
          $('#slice9m').show();
          $('#diameter9').show();
          $('#diameter9mtext').show();
        });

        $('#slice9m').mouseleave(function() {
          $('#slice9m').hide();
          $('#diameter9').hide();
          $('#diameter9mtext').hide();
        });

        $('#emptydiameter11').mouseenter(function() {
          $('#slice11m').show();
          $('#diameter11').show();
          $('#diameter11mtext').show();
        });

        $('#slice11m').mouseleave(function() {
          $('#slice11m').hide();
          $('#diameter11').hide();
          $('#diameter11mtext').hide();
        });

        $('#emptydiameter13').mouseenter(function() {
          $('#slice13m').show();
          $('#diameter13').show();
          $('#diameter13mtext').show();
        });

        $('#slice13m').mouseleave(function() {
          $('#slice13m').hide();
          $('#diameter13').hide();
          $('#diameter13mtext').hide();
        });

        $('#emptydiameter15').mouseenter(function() {
          $('#slice15m').show();
          $('#diameter15').show();
          $('#diameter15mtext').show();
        });

        $('#slice15m').mouseleave(function() {
          $('#slice15m').hide();
          $('#diameter15').hide();
          $('#diameter15mtext').hide();
        });


    //OLD - FOR SHOWING DIAMETER BUTTON ON
        //$('#diameterclick').click(function() {
          //$('#diameterclick').hide();
          //$('#umbrelladiameters').hide();
        //});



  //COLOR BUTTON INTERACTIVITY

    //TURNING CHART ON

        $('#colorbutton').mouseenter(function() {
          $('#colorhover').fadeIn();
        });

        $('#colorhover').mouseleave(function() {
          $('#colorhover').hide();
        });

        $('#colorhover').click(function() {

          //TURN OFF DIAMETER
          $('#diameterclick').hide();
          $('#diameterlegend').hide();
          $('#diameteron').hide();
          $('#diameteroff').show();
          $('#diameter7').fadeOut();
          $('#diameter9').fadeOut();
          $('#diameter11').fadeOut();
          $('#diameter13').fadeOut();
          $('#diameter15').fadeOut();
          $('#emptydiameterchart').hide();

          //TURN OFF HEIGHT
          $('#heightclick').hide();
          $('#heightlegend').hide();
          $('#heighton').hide();
          $('#heightoff').show();
          $('#height3m').fadeOut();
          $('#height4m').fadeOut();
          $('#height5m').fadeOut();
          $('#height6m').fadeOut();
          $('#height7m').fadeOut();
          $('#emptyheightchart').hide();

          //TURN COLOR ON
          $('#colorclick').fadeIn();
          $('#colorlegend').fadeIn();
          $('#coloron').fadeIn();
          $('#coloroff').hide();
          $('#coloroffhover').hide();
          $('#coloryellow').fadeIn();
          $('#colororange').fadeIn();
          $('#colorpink').fadeIn();
          $('#colorblue').fadeIn();
          $('#colorred').fadeIn();
          $('#colorpurple').fadeIn();
          $('#colorgreen').fadeIn();
        });

        $('#colorclick').click(function() {
          $('#colorclick').fadeOut("fast");
          $('#colorlegend').hide();
          $('#coloryellow').hide();
          $('#colororange').hide();
          $('#colorpink').hide();
          $('#colorblue').hide();
          $('#colorred').hide();
          $('#colorpurple').hide();
          $('#colorgreen').hide();
          $('#emptycolorchart').show();
        });

        $('#coloron').click(function() {
          $('#colorclick').fadeIn();
          $('#colorlegend').fadeIn();
          $('#coloryellow').fadeIn();
          $('#colororange').fadeIn();
          $('#colorpink').fadeIn();
          $('#colorblue').fadeIn();
          $('#colorred').fadeIn();
          $('#colorpurple').fadeIn();
          $('#colorgreen').fadeIn();
        });


      //PIE CHART INTERACTIVITY

          $('#emptyyellow_1_').mouseenter(function() {
            $('#sliceyellow').show();
            $('#coloryellow').show();
            $('#yellowtext').show();
          });

          $('#sliceyellow').mouseleave(function() {
            $('#sliceyellow').hide();
            $('#coloryellow').hide();
            $('#yellowtext').hide();
          });

          $('#emptyorange').mouseenter(function() {
            $('#sliceorange').show();
            $('#colororange').show();
            $('#orangetext').show();
          });

          $('#sliceorange').mouseleave(function() {
            $('#sliceorange').hide();
            $('#colororange').hide();
            $('#orangetext').hide();
          });

          $('#emptypink').mouseenter(function() {
            $('#slicepink').show();
            $('#colorpink').show();
            $('#pinktext').show();
          });

          $('#slicepink').mouseleave(function() {
            $('#slicepink').hide();
            $('#colorpink').hide();
            $('#pinktext').hide();
          });

          $('#emptyblue').mouseenter(function() {
            $('#sliceblue').show();
            $('#colorblue').show();
            $('#bluetext').show();
          });

          $('#sliceblue').mouseleave(function() {
            $('#sliceblue').hide();
            $('#colorblue').hide();
            $('#bluetext').hide();
          });

          $('#emptyred').mouseenter(function() {
            $('#slicered').show();
            $('#colorred').show();
            $('#redtext').show();
          });

          $('#slicered').mouseleave(function() {
            $('#slicered').hide();
            $('#colorred').hide();
            $('#redtext').hide();
          });

          $('#emptypurple').mouseenter(function() {
            $('#slicepurple').show();
            $('#colorpurple').show();
            $('#purpletext').show();
          });

          $('#slicepurple').mouseleave(function() {
            $('#slicepurple').hide();
            $('#colorpurple').hide();
            $('#purpletext').hide();
          });

          $('#emptygreen').mouseenter(function() {
            $('#slicegreen').show();
            $('#colorgreen').show();
            $('#greentext').show();
          });

          $('#slicegreen').mouseleave(function() {
            $('#slicegreen').hide();
            $('#colorgreen').hide();
            $('#greentext').hide();
          });

    //OLD - FOR SHOWING DIAMETER BUTTON ON
        //$('#colorclick').click(function() {
          //$('#colorclick').hide();
          //$('#colordiameters').hide();
        //});

}
