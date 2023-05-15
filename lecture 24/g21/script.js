//  jQuery("h1").css("background-color","red");


//  jQuery/$ --> to select
// const h1El = document.querySelector("h1");
// h1El.style.backgroundColor="red"

// style Object, styles in camelCase
const styleObj = {

    backgroundColor:"aqua",
    fontSize:"40px",
    color:"red"
}

// select element
$("h1").css(styleObj)

//select class
$(".dc").css("color","red");

// select id
$("#spiderman").css("font-size","30px")

//
$("ul li").css("color","blue");


// addClass removeClass toggleClass
$("p").addClass("red")

$("P").removeClass("red");

$("p").toggleClass("hide");
$("p").toggleClass("hide");

