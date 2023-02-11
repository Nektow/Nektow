jQuery(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) { 
                $('#scrollUp').css('right','10px');
            } else { 
                $('#scrollUp').removeAttr( 'style' );
            }

        });
    });
});

jQuery(function(){
    function scrollToDown() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0 ) {
                $('#scrollDown').css('right','10px');
            } else {
                $('#scrollDown').removeAttr( 'style' );
            }
        });
    }
    $(function () {
        scrollToDown();
    });
});