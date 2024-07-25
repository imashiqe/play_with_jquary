// function syntex

// hide show start

$(function() {

$('#btn1').click(function() {
    $('h1').hide();

});

$('#btn2').click(function(){
    $('h1').show();
})

$('#btn3').click(function(){
    $('h1').toggle();
})
// hide show end

$('#btn4').click(function(){
  $('h1').slideUp(1000);
});

$('#btn5').click(function(){
 $('h1').slideDown(1000);
});

$('#btn6').click(function(){
 $('h1').slideToggle(1000);
});
// slide up slide down end

$('#btn7').click(function(){
    $('h1').fadeOut(1000);
   });


$('#btn8').click(function(){
 $('h1').fadeIn(1000);
});

$('#btn9').click(function(){
 $('h1').fadeToggle(1000);
});

// color start

$('#btn10').click(function(){
  $('.one').addClass('two');
});
$('#btn11').click(function(){
  $('.one').removeClass('two');
});

$('#btn12').click(function(){
 $('.one').toggleClass('two');
});
// Animation

$('#btn13').click(function(){
 $('.ball').animate({left:'950px'},1000);
 $('.ball').animate({top:'200px'},1000);
 $('.ball').animate({left:'0px'},1000);
 $('.ball').animate({top:'0px'},1000);
});







});