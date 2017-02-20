$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 290) {
            $('#tophead').addClass('stickytop');
        }
        else {
            $('#tophead').removeClass('stickytop');
        }
    });
});

$( "#menu" ).click(function() {
  $( "#nav-menu" ).toggle();
});
