// let paras = document.querySelectorAll("p");
// paras[0].setAttribute("class","redclass")
// paras[1].setAttribute("class","blueclass");

// paras[0].setAttribute("class","redclass bigText")

// paras[1].setAttribute("class","blueclass bigText")

// paras[0].classList.add("blueclass")
// paras[0].classList.add("bigText")
// paras[0].classList.remove("blueclass")


// paras[0].classList.add("hide");
// paras[0].classList.remove("hide");

// paras[0].classList.toggle("hide");
// paras[0].classList.toggle("hide");

let batman = document.querySelector(".dceu");

batman.classList.add("blueclass");

// batman.parentElement.style.backgroundColor="aqua"
// backgound-color   ---> backgroundColor
// upwards
batman.parentElement.parentElement.style.backgroundColor="aqua"

// sibling
batman.nextElementSibling.classList.add("redclass")

let liEl = document.createElement("li")
liEl.textContent="aquaman"

let ulEl = document.querySelector("ul");
// append prepend
ulEl.prepend(liEl);
