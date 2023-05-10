// const batman = document.querySelector(".batman")
// parentElement
// batman.parentElement.style.backgroundColor="#3333"

// siblings
// batman.previousElementSibling.style.color="red";

// const div = document.querySelector("div");

// console.log(div.children)

// div.children[0].style.color="red";

// const flash = document.createElement("li")

// flash.textContent="Flash"

// append prepend --> inserting child
// div.children[1].prepend(flash);

// div.children[1].append(flash);

// before after --> inserting sibling
// batman.after(flash);
// batman.before(flash);



// const btn2 = document.querySelector("#btn2");

// events
// function sing(event)
// {
//     console.log("i am singing");
// }
// function cry(event)
// {
//     console.log(event);
//     console.log(event.target);
//     // console.log(event.target.textContent);
//     // styling target element
//     event.target.style.backgroundColor="gold"
//     event.target.style.fontSize="20px"
//     console.log("i am crying");
// }
// btn2.onclick=sing
// btn2.onclick=cry
// click and dblclick

// btn2.addEventListener("dblclick",sing);
// btn2.addEventListener("click",cry);


// why happening once in revert ?
const btn2 = document.querySelector("#btn2");
function handleMouseEnter(event)
{
    event.target.style.backgroundColor="green";
    event.target.style.fontSize="20px";
    event.target.style.borderRadius="5px";
}
function handleLeave(event)
{
    event.target.style="revert";
}

btn2.addEventListener("mouseenter",handleMouseEnter)

btn2.addEventListener("mouseleave",handleLeave)

function handleCopy(event)
{
    console.log("stop copying 😠😠")
}
const lis = document.querySelectorAll("li");

// copy event
for(let li of lis)
{
    li.addEventListener("copy",handleCopy)
}

const ip = document.querySelector("input");

function handlekeys(event)
{
    console.log(event);
    console.log("key pressed")
}

function handlekeyup(event)
{
    console.log("key upped")
}
// ip.addEventListener("keydown",handlekeys)
ip.addEventListener("keyup",handlekeyup)
