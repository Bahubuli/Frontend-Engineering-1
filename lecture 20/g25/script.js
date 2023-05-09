// const dceu =document.querySelectorAll(".dceu")
// const mcu = document.querySelectorAll(".mcu")

// for(let i=0;i<dceu.length;i++)
// dceu[i].style.color="blue";

// for(let i=0;i<mcu.length;i++)
// mcu[i].style.color="red";


// let paras = document.querySelectorAll("p")

// paras[0].setAttribute("class","redColor");

// paras[1].setAttribute("class","blueColor")

// paras[0].setAttribute("class","redColor bigText");

// adding multiple classes
// paras[0].classList.add("redColor")
// paras[0].classList.add("bigText");

// removing classes
// paras[0].classList.remove("redColor");


// paras[0].classList.add("hide");
// paras[0].classList.remove("hide");

// paras[0].classList.toggle("hide");
// paras[0].classList.toggle("hide");

// dom traversal

const batman = document.querySelector(".dceu")

// parent 
// background-color --> backgroundColor
batman.parentElement.style.backgroundColor="aqua"

// sibling 
batman.nextElementSibling.style.color="red";
