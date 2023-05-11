// const paras = document.querySelectorAll("p");

// paras[0].setAttribute("class","red");

// paras[1].setAttribute("class","blue");

// paras[0].setAttribute("class","bigFont red")

// classList

// paras[0].classList.add("red");
// paras[0].classList.add("bigFont");

// // remove
// paras[0].classList.remove("red");

// // contain
// console.log(paras[0].classList.contains("red"));

// paras[0].classList.toggle("red");
// paras[0].classList.toggle("red");
// paras[0].classList.toggle("red");


// paras[0].classList.add("hide");


// dom traversal
// const batman = document.querySelector(".bat");

// parentElement
// batman.parentElement.style.backgroundColor="aqua"

// sibling
// batman.nextElementSibling.style.color="red"
// batman.previousElementSibling.style.color="orange"


// children
// const container = document.querySelector(".container");

// container.children[0].style.color="blue"


// creating and adding elements

// const flash = document.createElement("li")

// flash.textContent="flash"

// const ul = document.querySelector("ul");

//insert as child --> append and prepend

// appendChild ---> for elements only
// append to append even normal text
// ul.append(flash);
// ul.prepend(flash);

// why not at both position ?

//insert as sibling --> before and after


// ----------------------------------------

const flash = document.createElement("li")

flash.textContent="flash"

const ul = document.querySelector("ul");

const batman = document.querySelector(".bat");

batman.before(flash);
batman.after(flash);

// ----------Hw--------------------
// insert an image after this container
// create using creaElement
// uset src attribute for url
// using setAttribute
