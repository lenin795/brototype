$(document).ready(function(){
    $('#test').click(function(){
        //alert('hello guys');
        $('.box').fadeToggle(1000);
    })
    $('.box').mouseenter(function() {
        $(this).css({"background-color":"red"});
    })
    $('.box').mouseleave(function() {
        $(this).css({"background-color":"green"});
    })

    
});
