$(document).ready(function(){
//hide()
$('#p1').click(function(){
    $(this).hide();
});

// show()
$('.p2').hide();
$('.p2').click(function(){
    $(this).show();
});

// toggle()
$("#p4").click(function(){
    $("#p4").toggle();
});



});