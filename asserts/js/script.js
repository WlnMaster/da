$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

$(document).ready(function() {
   
    $(window).scroll(function() {
        let scrollPosition = $(this).scrollTop();  // ตำแหน่งการเลื่อนหน้าจอ
        let fadeStart = 0;  // จุดเริ่มต้นของการ fade
        let fadeEnd = 770;  // จุดสิ้นสุดของการ fade (พิกเซล)

       
        let opacity = 1 - (scrollPosition - fadeStart) / fadeEnd;
        if (opacity >= 0) {
            $('#hero-section').css('opacity', opacity);
        } else {
            $('#hero-section').css('opacity', 0);
        }
    });
});
