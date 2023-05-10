// selectors

// get element by tag name
// const h1Col = document.getElementsByTagName("h1")

// const h1 = h1Col[0];
// backgound-color --->backgoundColor
// font-size ---> fontSize
// h1.style.backgroundColor="aqua";
//select using id
// const mlist = document.getElementById("mlist");

// mlist.style.color="blue"

// querySelector
// const mcu = document.querySelector(".mcu");


// querySelectorAll
const mcu =document.querySelectorAll(".mcu");

for(let i=0;i<mcu.length;i++)
mcu[i].style.color="red"

// make dceu class blue

const dceu = document.querySelectorAll(".dceu");

for(let i=0;i<dceu.length;i++)
dceu[i].style.color="blue"


// const para = document.querySelector("p");

// // innerText, innerHTML, textContent

// console.log(para.innerHTML)

// console.log(para.innerText)

// console.log(para.textContent)

// changing content
// para.innerText="this is new text";
// para.innerText += " this is appeded text"


const pibox = document.querySelector(`input[type="password"]`)

// getAttribute("name")
// console.log(pibox.getAttribute("type"))

// const li1 = document.querySelector("li");

// console.log(li1.getAttribute("class"))

// setAttribute("name","value");

pibox.setAttribute("type","radio")

// change first inputbox to checkbox
