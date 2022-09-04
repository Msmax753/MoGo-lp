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

    var nav = $("#nav");
    var nav_toggle = $("#nav_toggle");

    $("#nav").on("click", function() {

        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");

       

    });



    

    var nav = $("#nav");
    var nav_toggle = $("#nav_toggle");

    $(document).mouseup(function(event) {

        if ( ! nav.is(event.target) && nav.has(event.target).lenght === 0 && ! nav_toggle.is(event.target) && nav_toggle.has(event.target).lenght === 0) {
            nav.fadeOut();
        }

    })



       
    



    /*Smooth scroll*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data("scroll"),
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

    

});