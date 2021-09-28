//import TransakSDK from '@transak/transak-sdk'

let transak = new TransakSDK.default({
    apiKey: '11eca9d2-ee0e-46d9-9ae4-324cde64c371',  // Your API Key (Required)
    environment: 'PRODUCTION', // STAGING/PRODUCTION (Required)
    defaultCryptoCurrency: 'BNB',
    defaultNetworks: 'BSC',
    walletAddress: '', // Your customer wallet address
    themeColor: '000000', // App theme color in hex
    email: '', // Your customer email address (Optional)
    redirectURL: 'https://app.lep.gold/swap?inputCurrency=ETH&outputCurrency=0x3064bbB132cB072359AE3F98ebEdB2B3663C74ED',
    hostURL: window.location.origin, // Required field
    widgetHeight: '800px',
    widgetWidth: '500px'
});


function handleCrypto() {
    transak.init();

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
        console.log(data)
    });

    // This will trigger when the user closed the widget
    transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (orderData) => {
        transak.close();
    });

    // This will trigger when the user marks payment is made.
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
        console.log(orderData);
        transak.close();
    });


}





// function launchTransak() {
//     let transak = new TransakSDK.default({
//         apiKey: '4fcd6904-706b-4aff-bd9d-77422813bbb7', // Your API Key
//         environment: 'PRODUCTION', // STAGING/PRODUCTION
//         defaultCryptoCurrency: 'ETH',
//         walletAddress: '', // Your customer wallet address
//         themeColor: '000000', // App theme color in hex
//         fiatCurrency: '', // INR/GBP
//         email: '', // Your customer email address
//         redirectURL: '',
//         hostURL: window.location.origin,
//         widgetHeight: '550px',
//         widgetWidth: '100%'
//     });
//     transak.init();
//     // To get all the events
//     transak
//         .on(transak.ALL_EVENTS, (data) => {
//             console.log(data)
//         });
//     // This will trigger when the user marks payment is made.
//     transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
//         console.log(orderData);
//         //transak.close();
//     });
// }
// window.onload = function () {
//     launchTransak()
// }





$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top

    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    // /**Theme switcher - DEMO PURPOSE ONLY */
    // $('.switcher-trigger').click(function () {
    //     $('.switcher-wrap').toggleClass('active');
    // });
    // $('.color-switcher ul li').click(function () {
    //     var color = $(this).attr('data-color');
    //     $('#theme-color').attr("href", "css/" + color + ".css");
    //     $('.color-switcher ul li').removeClass('active');
    //     $(this).addClass('active');
    // });
});



function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date('Fri Oct 01 2021 20:07:14 GMT-0400');
initializeClock('clockdiv', deadline);



// function launchTransak() {
//     let transak = new TransakSDK.default({
//         apiKey: '11eca9d2-ee0e-46d9-9ae4-324cde64c371', // Your API Key
//         environment: 'PRODUCTION', // STAGING/PRODUCTION
//         defaultCryptoCurrency: 'BNB',
//         defaultNetwork: 'BSC',
//         walletAddress: '', // Your customer wallet address
//         themeColor: '000000', // App theme color in hex
//         fiatCurrency: '', // INR/GBP
//         email: '', // Your customer email address
//         redirectURL: 'https://app.lep.gold/swap?inputCurrency=ETH&outputCurrency=0x3064bbB132cB072359AE3F98ebEdB2B3663C74ED',
//         hostURL: window.location.origin,
//         widgetHeight: '750px',
//         widgetWidth: '100%'
//     });
//     transak.init();
//     // To get all the events
//     transak
//         .on(transak.ALL_EVENTS, (data) => {
//             console.log(data)
//         });
//     // This will trigger when the user marks payment is made.
//     transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
//         console.log(orderData);
//         //transak.close();
//     });
// }
// function buyCrypto() {
//     //  document.window
//     launchTransak()
// }
// window.onload = function () {
//     launchTransak()
// }
