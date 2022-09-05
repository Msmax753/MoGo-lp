$ (function() {

    
    /*Fixed Header*/

    var header = $ ("#header"),
        intro = $("#intro"),
        introH = intro.innerHeight (),
        scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {

        introH = intro.innerHeight ();

        scrollPos = $(this).scrollTop();

        if( scrollPos >= introH) {
            header.addClass("fixed");
        }
        
        else {
            header.removeClass("fixed");
        }
    
    });


    /*Close menu after click*/

    var nav = $("#nav");
    var nav_toggle = $("#nav_toggle");

    $("#nav").on("click", function() {

        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");

       

    });




    
    /*Smooth scroll*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;

    
        $("#nav a").removeClass("active");
        
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

    });

    

    /*Menu nav toggle*/

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");

        $("#nav").toggleClass("active");

        

    });

    $("#about").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");

        $("#nav").toggleClass("active");

    });

    


    /*Collapse-accordion*/

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll");
        
        $this.toggleClass("active");
        
    });



    /*Slider*/

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1


    });


});