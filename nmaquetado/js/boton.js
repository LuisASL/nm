$(document).ready(function() { irArriba(); });

function irArriba() {
    $('.ir-arriba').click(function() { $('base,html').animate({ scrollTop: '0px' }, 100); });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) { $('.ir-arriba').slideDown(600); } else { $('.ir-arriba').slideUp(600); }
    });
    $('.ir-abajo').click(function() { $('body,html').animate({ scrollTop: '100vh' }, 1000); });
}