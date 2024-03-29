$(".collapsed").click(function(){
    $('.navbar-nav-md').toggle("slow");
})
$('.nav-item-toggle').click(function(){
    $('.dropdown-menu-md-toggle').slideToggle("fast")
})

$('.nav-item-toggle1').click(function(){
    $('.dropdown-menu-md-toggle1').slideToggle("fast")
})
$('.nav-item-toggle2').click(function(){
    $('.dropdown-menu-md-toggle2').slideToggle("fast")
})
$('.nav-item-toggle3').click(function(){
    $('.dropdown-menu-md-toggle3').slideToggle("fast")
})

// Overlay Search

$('.search_toggle').on('click', function(e){
    e.preventDefault();
    $('.search_toggle').toggleClass('active');
    $('.overlay').toggleClass('open');
    setTimeout(function () {
        $('.search-form .form-control').focus();
    }, 400);
});

// Fixed Header 

$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if(window_top > 50) {
        $('.site-navigation').addClass('menu_fixed')
    }
    else{
        $('.site-navigation').removeClass('menu_fixed')
    }
})

$(window).scroll(function(){
    var window_top = $(window).scrollTop() + 1;

    if(window_top > 500){
        $('.scroll-to-top').addClass('reveal');
    }
    else{
        $('.scroll-to-top').removeClass('reveal');
    }
})

$(function(){
    $('#customers-testimonials').owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed: 700,
        look:true,
        autoPlayHoverPause:true
    });
});
