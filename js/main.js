let curItem = -1;
function showNav(){
    $('.burger-line').addClass('burger_open');
    $('.navigation').addClass('navigation_active');
    $('body').css({'overflow':'hidden'});
    $('.burger').css({'border-color':'white'});
}
function hideNav(){
    $('.burger-line').removeClass('burger_open');
    $('.navigation').removeClass('navigation_active');
    $('body').css({'overflow':'visible'});
    $('.burger').css({'border-color':'transparent'});
}
function getBodyScrollTop(){
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}
function getWidthPercent(){
    return getBodyScrollTop() / ( $(document).height() - $(window).height() );
}
function menuItemHover(){
    for (let i = 0; i < 5; i++) {
        $('.navigation-menu__item').eq(i).mouseover(function(event){
            if(i != curItem){
            $('.navigation-menu__item').eq(i).css({'transform':'scale(1.2)'});
            }
        });
        $('.navigation-menu__item').eq(i).mouseout(function(event){
            if(i != curItem){
            $('.navigation-menu__item').eq(i).css({'transform':'scale(1)'});
            }
        });
    }
}
function circleHover(){
    for (let i = 0; i < 13; i++) {
        $('.timeline-block__circle').eq(i).mouseover(function(event){
            $('.timeline-block__circle').eq(i).css({'transform':'scale(1.2)'});
            $('.timeline-block__date').eq(i).css({'opacity':'0.4'});
        });
        $('.timeline-block__circle').eq(i).mouseout(function(event){
            $('.timeline-block__circle').eq(i).css({'transform':'scale(1)'});
            $('.timeline-block__date').eq(i).css({'opacity':'0'});
        });
    }
}
function portfolioSize() {
    let w = $(window).width()/5;
    if ($(window).width()<1000){
        w = $(window).width()/4;        
    }
    if ($(window).width()<800){
        w = $(window).width()/3;        
    }
    if ($(window).width()<600){
        w = $(window).width()/2;        
    }
    if ($(window).width()<400){
        w = $(window).width();      
    }    
    $('.portfolio-item').css({'width':w});
    $('.portfolio-item').css({'height':w});
}
$(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    var aboutTop = $(".about").offset().top;
    var timelineTop = $(".timeline").offset().top;
    if(windowTop >= 0 && windowTop < (aboutTop-$(window).height()/2)){
        curItem = -1;
        console.log("0");
        menuItemHover();
    }
    if(windowTop >= (aboutTop-$(window).height()/2) && windowTop < (timelineTop - aboutTop/2)){
        $('.navigation-menu__item:nth-child(1)').css({'font-size':'29px', 'color':'tomato'});
        curItem = 0;
        console.log("1");
        menuItemHover();
    }
    else{
        $('.navigation-menu__item:nth-child(1)').css({'font-size':'24px', 'color':'white'});
    }
    if(windowTop >= (timelineTop - aboutTop/2)){
        $('.navigation-menu__item:nth-child(2)').css({'font-size':'29px', 'color':'tomato'});
        curItem = 1;
        console.log("2");
        menuItemHover();
    }
    else{
        $('.navigation-menu__item:nth-child(2)').css({'font-size':'24px', 'color':'white'});
    }
});
$(document).ready(function(){
    portfolioSize();
});
$(window).resize(function() {
    portfolioSize();
});
$('.burger').click(function(event){
    event.stopPropagation();
    if(!$('.navigation').hasClass('navigation_active')) {
          showNav();
    }
    else {
          hideNav();
    }
});
$('.navigation').click(function(event) {
    event.stopPropagation();
});
$('.navigation-menu__item').click(hideNav);
$('.navigation-social__item').click(hideNav);

if ($(window).width() > '600'){
    circleHover();
}
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});