// insert a image just before button
// use createElement
// and unsplash for image url

// const imgEl =document.createElement("img")
// imgEl.setAttribute("src","https://images.unsplash.com/photo-1683538967101-a1543aac2dc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80")

// const btn = document.querySelector("button");

// btn.after(imgEl)

// events
// function sing()
// {
//     console.log("singing")
// }
// function cry()
// {
//     console.log("cry");
// }
// const btn2 = document.querySelector("#btn2")

// // btn2.onclick=sing
// // btn2.onclick=cry

// btn2.addEventListener("click",sing);
// btn2.addEventListener("click",cry);

// -----------------------------

function handleClick(event)
{
    // console.log(event);
    console.log(event.target);
    console.log(event.target.innerText)
}

// mouse enter mouse leave event

// function handleMouseEnter(event)
// {
//    event.target.style.backgroundColor="aqua";
//    event.target.style.fontSize="30px"
//    event.target.textContent="Button 2"
// }
// function handleMouseLeave(e)
// {
//     e.target.style.backgroundColor="";
//     e.target.style.fontSize=""
// }
// const btn2 = document.querySelector("#btn2")
// btn2.addEventListener("click",handleClick)

// btn2.addEventListener("mouseenter",handleMouseEnter)
// btn2.addEventListener("mouseleave",handleMouseLeave)

// copy event
// const para = document.querySelector("p");

// function handleCopy()
// {
//     console.log("Don't copy me 😠")
// }

// para.addEventListener("copy",handleCopy);

// keyup keydown keypress
// keypress --> no shift,tab, backspace etc.
// function handleKey(event)
// {
//     console.log(event.key);
// }

// const ip = document.querySelector("input");

// ip.addEventListener("keydown",handleKey)

function handleSubmit(event)
{
   event.preventDefault();
   console.log(event);
}

const form =document.querySelector("form");

form.addEventListener("submit",handleSubmit)
