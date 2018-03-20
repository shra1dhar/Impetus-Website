$(document).ready(function () {
    $(".fa-times").click(function () {
        $(".sidebar_menu").removeClass("show_menu");
    });

    $(".toggle_menu").click(function () {
        $(".sidebar_menu").addClass("show_menu");
    });

    $(".navigation_item").click(function(){
        $(".sidebar_menu").removeClass("show_menu");
    });
    $("#about").click(function(){
        $(".about").css("display", "block");
    });
});



const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Mar 23, 2018 09:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Distance from now and the launch date (ms)
    const distance = launchDate - now;

    // Time calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    countdown.innerHTML = `
  <div>${days}<span>&nbsp&nbspDays&nbsp&nbsp</span></div>
  <div>${hours}<span>&nbspHours&nbsp</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

    // If launch date is reached
    if (distance < 0) {
        // Stop countdown
        clearInterval(intvl);
        // Style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }
}, 1000);


    // Events
$(".e-adjust").mouseover(function () {
    $(".event-descrip").css("display", "block");
});
$(".e-adjust").mouseleave(function () {
    $(".event-descrip").css("display", "none");
});
$(document).ready(function () {
    var isMobile = window.matchMedia("only screen and (max-width: 420px)");
    if (isMobile.matches) {
        $(".d1").click(() => {
            $(".day2").css("display", "none");
            $(".day1").css("display", "block");
            $(".d1").css("text-decoration", "underline");
            $(".d2").css("text-decoration", "none");
        });
        $(".d2").click(() => {
            $(".day1").css("display", "none");
            $(".day2").css("display", "block");
            $(".d2").css("text-decoration", "underline");
            $(".d1").css("text-decoration", "none");
        });
    }
});
// Day 1
$("#ev1").click( function() {
    $(".E1").removeClass("q");
    $(".E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");

});
$("#ev2").click(function () {
    $(".E2").removeClass("q");
    $(".E1, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev3").click(function () {
    $(".E3").removeClass("q");
    $(".E1, .E2, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev4").click(function () {
    $(".E4").removeClass("q");
    $(".E1, .E2, .E3, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev5").click(function () {
    $(".E5").removeClass("q");
    $(".E1, .E2, .E3, .E4, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev6").click(function () {
    $(".E6").removeClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev7").click(function () {
    $(".E7").removeClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E8, .E9, .E10, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev8").click(function () {
    $(".E8").removeClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E9, .E10, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev9").click(function () {
    $(".E9").removeClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E10, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev10").click(function () {
    $(".E10").removeClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E11, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev11").click(function () {
    $(".E11").removeClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E12").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});
$("#ev12").click(function () {
    $(".E12").removeClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11").addClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
});

// Day 2
$("#eev1").click(function () {
    $(".EE1").removeClass("q");
    $(".EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
        $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});
$("#eev2").click(function () {
    $(".EE2").removeClass("q");
    $(".EE1, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});
$("#eev3").click(function () {
    $(".EE3").removeClass("q");
    $(".EE1, .EE2, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});
$("#eev4").click(function () {
    $(".EE4").removeClass("q");
    $(".EE1, .EE2, .EE3, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});
$("#eev5").click(function () {
    $(".EE5").removeClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, E12").addClass("q");
});
$("#eev6").click(function () {
    $(".EE6").removeClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE7, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});
$("#eev7").click(function () {
    $(".EE7").removeClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE8, .EE9, .EE10, .EE11, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
    });
$("#eev8").click(function () {
    $(".EE8").removeClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE9, .EE10, .EE11, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});
$("#eev9").click(function () {
    $(".EE9").removeClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE10, .EE11, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});
$("#eev10").click(function () {
    $(".EE10").removeClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE11, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});
$("#eev11").click(function () {
    $(".EE11").removeClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE12").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});
$("#eev12").click(function () {
    $(".EE12").removeClass("q");
    $(".EE1, .EE2, .EE3, .EE4, .EE5, .EE6, .EE7, .EE8, .EE9, .EE10, .EE11").addClass("q");
    $(".E1, .E2, .E3, .E4, .E5, .E6, .E7, .E8, .E9, .E10, .E11, .E12").addClass("q");
});

