


$(window).on('load', function() { 
    $('.spinner4').fadeOut(); 
    $('.fakeLoader').delay(50).fadeOut(100); 
    $('body').delay(50).css({'overflow':'visible'});
});

function paddingFirst() {
    if ( $(window).width() >= 992 ) {

        var padding = $( window ).height() - $('.human').height();

        $('.first').css('paddingTop', padding);
        $('.firstRow').css('marginTop', -padding);
    }
}

function autoHeight () {
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
}


function overlayWeight() {
    var width = $('.fourth .row img').width();
    $('.fourth .overlay').css('width', width);
}


$(document).ready(function () {
    paddingFirst();
    autoHeight();
    overlayWeight();
});

$(window).resize(function () {
    paddingFirst();
    autoHeight();
    overlayWeight();
});
