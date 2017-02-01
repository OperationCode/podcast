/*---------- Testimonials ----------*/
$('.reviews-active').html('<p>' + $('.reviews-single:first p').html() + '</p>');
$('.reviews-single:first .reviews-single-image img').css('opacity', '1');

$('.reviews-single-image img').on('click', function() {
    $('.reviews-single-image img').css('opacity', '0.5');
    $(this).css('opacity', '1');
    var new_testimonial_text = $(this).parent('.reviews-single-image').siblings('p').html();
    $('.reviews-active p').fadeOut(300, function() {
        $(this).html(new_testimonial_text);
        $(this).fadeIn(400);
    });
});
/*----------*/

/*---------- Owl Carousel: Other Titles ----------*/
$(document).ready(function() {
 
var owl = $("#owl-demo");
 
owl.owlCarousel({
items : 4, //10 items above 1000px browser width
itemsDesktop : [1000,5], //5 items between 1000px and 901px
itemsDesktopSmall : [900,3], // betweem 900px and 601px
itemsTablet: [600,2], //2 items between 600 and 0
itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});
 
// Custom Navigation Events
$(".next").click(function(){
owl.trigger('owl.next');
})
$(".prev").click(function(){
owl.trigger('owl.prev');
})
$(".play").click(function(){
owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
})
$(".stop").click(function(){
owl.trigger('owl.stop');
})
 
});
/*----------*/

/*---------- Tooltip ----------*/
$('.social-icons a').tooltip();
/*----------*/

/*---------- Animation ----------*/
$('.preview-section').waypoint(function() {
        $('.section-item').addClass( 'fadeInUp animated' );
    },
    {
        offset: '50%',
        triggerOnce: true   
    });
$('.author-section').waypoint(function() {
        $('.author-section-body').addClass( 'fadeInUp animated' );
    },
    {
        offset: '50%',
        triggerOnce: true   
    });
$('.testimonials-section').waypoint(function() {
        $('.testimonials-section-body').addClass( 'fadeInUp animated' );
    },
    {
        offset: '50%',
        triggerOnce: true   
    });
$('.other-titles-section').waypoint(function() {
        $('.other-titles-section-body').addClass( 'fadeInUp animated' );
    },
    {
        offset: '50%',
        triggerOnce: true   
    });
$('.summary-section').waypoint(function() {
        $('.summary-section-body').addClass( 'fadeInUp animated' );
    },
    {
        offset: '50%',
        triggerOnce: true   
    });
$('.newsletter-section').waypoint(function() {
        $('.newsletter-section-body').addClass( 'fadeInUp animated' );
    },
    {
        offset: '50%',
        triggerOnce: true   
    });
$('.video-section').waypoint(function() {
        $('.video-section-body').addClass( 'fadeInUp animated' );
    },
    {
        offset: '50%',
        triggerOnce: true   
    });
/*----------*/
