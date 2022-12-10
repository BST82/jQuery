$(document).ready(function(){

    // hiding p1 id 
    $('#p1').hide();
    // result on click
    $('#btn1').click(function(){
        $('#p1').toggle();
    });
    
    // for btn2
    $('.pre1').hide();
    //result on click
    $('#btn2').click(function(){
     $('.pre1').toggle();
    });

    // for selector element
    $('.p4').hide();
    $('#btn5').click(function(){
         $('.p4').toggle();
    });
  
    // for selector class
    $('.p5').hide();
    $('#btn4').click(function(){
         $('.p5').toggle();
    });

    // for selector id
    $('.p6').hide();
    $('#btn3').click(function(){
         $('.p6').toggle();
    });

     // for more selector study
     $('#btn7').click(function(){
        
     });

     $(".pa").click(function(){
          $(this).hide();
     });

     //dblclick
     $('.pb').dblclick(function(){
         $(this).hide();
     });

     //mouseenter()
      $('.pc').mouseenter(function(){
           $(this).css("background-color","pink");
      });

      //mouseleave()
      $('.pd').mouseleave(function(){
       alert("you leaved mouse ");
      });

      //hover()
      $('.pe').hover(function(){
          alert("this is hover effect ");
      },
      function(){
          alert("ok bye");
      });
});