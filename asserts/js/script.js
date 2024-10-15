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

$(document).ready(function() {
    new Typed('#type-it', {
        strings: ['Photographer', 'Developer','Sorrathorn.'],
        typeSpeed: 100,
    });
    new Typed('#type-it1', {
        strings: ['Portfolio', 'Project','Web'],
        typeSpeed: 333,
    });
});
// Get the button element
let mybutton = document.getElementById("myBtn");

// Add scroll event listener
window.onscroll = function () {
  scrollFunction();
};

// Show or hide the button based on scroll position
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

// Smooth scroll to top when the button is clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
