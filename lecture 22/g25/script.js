// const btn = document.querySelector("button")

// function handleMouseEnter(e)
// {
//     // console.log(e.target)
//     e.target.style.fontSize="25px";
//     e.target.style.backgroundColor="aqua";
// }

// function handleMouseLeave(e)
// {
//     e.target.style.fontSize="";
//     e.target.style.backgroundColor="";
// }
// btn.addEventListener("mouseenter",handleMouseEnter)
// btn.addEventListener("mouseleave",handleMouseLeave)

// const ip = document.querySelector("input")

// keypress, keydown, keyup

// function handleKey(event)
// {
//  console.log(event);
//  console.log(event.key);
//  console.log(ip.value)
// }
// keypress--> no backspace,shift etc.
// keyup --> when you release the key
// keydown --> similiar to keypress
// but supports shift,backspace etc.
// ip.addEventListener("keypress",handleKey);


// const ip = document.querySelector("input");
// const ul = document.querySelector("ul");
// function handleKey(event)
// {
//     if(event.key=="Enter")
//     {
//         let li = document.createElement("li");
//         li.textContent= ip.value;
//         ul.append(li);
//         ip.value="";
//         li.addEventListener("click",function(event)
//         {
//             event.target.remove()
//         })
//     }
// }
// const lis = document.getElementsByTagName("li");
// console.log(lis);

// ip.addEventListener("keydown",handleKey)



const form = document.querySelector("form");


function handleSubmit(event)
{
    // prevent default action of form event
    // which is to reload
    event.preventDefault();
    console.log(form.elements);

    // selecting form elements
    form.elements[1].style.backgroundColor="red"
}

form.addEventListener("submit",handleSubmit)
