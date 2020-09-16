


 
    $('.spinner4').fadeOut(); 
    $('.fakeLoader').delay(50).fadeOut(100); 
    $('body').delay(50).css({'overflow':'visible'});
    console.log('load');




$(document).ready(function () {
    
    console.log('ready');
    
    /*first section padding with heading*/
    if ( $(window).width() >= 992 ) {

        var padding = $( window ).height() - $('.human').height();

        $('.first').css('paddingTop', padding);
        $('.firstRow').css('marginTop', -padding);
    }
    /*first section padding with heading*/
    
    
    /*manage that the height and the width of third section images be the same*/
    if ( $(window).width() >= 576 ) {
        
        $('.third .row img:not(.widthImage)').css('width', 'auto');
        
        var height = $(".heightImage").height();
        $('.third .row img:not(.heightImage)').css('height', height);
    } 
    else {
        $('.third .row img:not(.heightImage)').css('height', 'auto');
        
        var width = $(".widthImage").width();
        $('.third .row img:not(.widthImage)').css('width', width);
        
        

    }
    /*manage that the height and the width of third section images be the same*/

    
    /*the description bar equal to the image width*/
    var widthFourth = $('.fourth .row img').width();
    $('.fourth .overlay').css('width', widthFourth);
    /*the description bar equal to the image width*/
});


