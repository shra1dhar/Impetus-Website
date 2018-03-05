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
        document.getElementById(about).style.display = "block";
    });
});

 // Set the date we're counting down to
var countDownDate = new Date("Mar 23, 2018 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("time").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";
    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Started";
    }
}, 1000);