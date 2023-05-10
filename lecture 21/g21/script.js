const paras = document.querySelectorAll("p")

// paras[0].setAttribute("class","red");
// paras[1].setAttribute("class","blue");

// paras[0].setAttribute("class","bigFont red");

// adding classes
// paras[0].classList.add("red");
// paras[0].classList.add("bigFont");

// // removing class
// paras[0].classList.remove("red");

// // added 
// paras[0].classList.toggle("hide")
// // removed
// paras[0].classList.toggle("hide")

// // contains
// console.log(paras[0].classList.contains("hide"))

const batman = document.querySelector(".dc");

// parent element
batman.parentElement.style.backgroundColor="#2222"

// siblings
batman.nextElementSibling.style.color="red"

batman.previousElementSibling.style.color="blue"

// childrens
const div = document.querySelector("div");

// change color of first child
div.children[0].style.color="green"

// append element
const li = document.createElement("li");

li.textContent="black adam"

const ul = document.querySelector("ul");
// append child
// ul.appendChild(li)

ul.append(li);

// prepend child
ul.prepend(li);

// before and after
batman.after(li);

batman.before(li);

