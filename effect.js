$(window).load(function() {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$('document').ready(function() {
    var vw;

    // UPDATED: This function now checks screen size for correct positioning
    $(window).resize(function() {
        vw = $(window).width() / 2;

        // Stop all balloons on resize
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();

        // --- START OF MOBILE FIX ---
        var bWidth = 100; // Default balloon width for desktop
        if ($(window).width() <= 768) {
            bWidth = 60; // New balloon width for mobile (matches CSS)
        }
        // --- END OF MOBILE FIX ---

        // Animate unused balloons off-screen
        $('#b11').animate({ top: -500, left: vw - 350 }, 500);
        $('#b22').animate({ top: -500, left: vw - 250 }, 500);

        // **UPDATED POSITIONS using bWidth for correct centering**
        // 6 balloons, so we start at vw - 3*bWidth + half*bWidth = vw - 2.5*bWidth
        $('#b33').animate({ top: 240, left: vw - (bWidth * 2.5) }, 500); // 'S'
        $('#b44').animate({ top: 240, left: vw - (bWidth * 1.5) }, 500); // 'h'
        $('#b55').animate({ top: 240, left: vw - (bWidth * 0.5) }, 500); // 'r'
        $('#b66').animate({ top: 240, left: vw + (bWidth * 0.5) }, 500); // 'e'
        $('#b77').animate({ top: 240, left: vw + (bWidth * 1.5) }, 500); // 'y'
        $('#b88').animate({ top: 240, left: vw + (bWidth * 2.5) }, 500); // 'a'
    });

    $('#turn_on').click(function() {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function() {
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function() {
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color', '#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function() {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function() {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function() {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopThree();
        });
    }

    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopFour();
        });
    }

    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopSeven();
        });
    }

    function loopEight() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b8').animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopEight();
        });
    }

    $('#balloons_flying').click(function() {
        $('.balloon-border').animate({ top: -500 }, 8000);
        
        // Balanced rotation classes
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');

        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        loopEight();

        $(this).fadeOut('slow').delay(5000).promise().done(function() {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function() {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function() {
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function() {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function() {
            $('#wish_message').fadeIn('slow');
        });
    });

    // UPDATED: This function now checks screen size for correct positioning
    $('#wish_message').click(function() {
        vw = $(window).width() / 2;

        // Stop all balloons
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();

        // Map all balloons to new IDs
        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22');
        $('#b3').attr('id', 'b33'); // S
        $('#b4').attr('id', 'b44'); // h
        $('#b5').attr('id', 'b55'); // r
        $('#b6').attr('id', 'b66'); // e
        $('#b7').attr('id', 'b77'); // y
        $('#b8').attr('id', 'b88'); // a

        // Animate unused balloons off-screen
        $('#b11').animate({ top: -500, left: vw - 350 }, 500);
        $('#b22').animate({ top: -500, left: vw - 250 }, 500);

        // --- START OF MOBILE FIX ---
        var bWidth = 100; // Default balloon width for desktop
        if ($(window).width() <= 768) {
            bWidth = 60; // New balloon width for mobile (matches CSS)
        }
        // --- END OF MOBILE FIX ---

        // **UPDATED POSITIONS using bWidth for correct centering**
        $('#b33').animate({ top: 240, left: vw - (bWidth * 2.5) }, 500); // 'S'
        $('#b44').animate({ top: 240, left: vw - (bWidth * 1.5) }, 500); // 'h'
        $('#b55').animate({ top: 240, left: vw - (bWidth * 0.5) }, 500); // 'r'
        $('#b66').animate({ top: 240, left: vw + (bWidth * 0.5) }, 500); // 'e'
        $('#b77').animate({ top: 240, left: vw + (bWidth * 1.5) }, 500); // 'y'
        $('#b88').animate({ top: 240, left: vw + (bWidth * 2.5) }, 500); // 'a'

        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function() {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function() {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function() {
            $('.message').fadeIn('slow');
            $('#my_photo').delay(500).fadeIn('slow');
        });

        var i;

        function msgLoop(i) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function() {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
                if (i == 50) {
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function() {
                        $('.cake').fadeIn('fast');
                    });

                } else {
                    msgLoop(i);
                }

            });
        }

        msgLoop(1);

    });
});
