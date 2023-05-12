// const ul = document.querySelector("ul");
// const ip = document.querySelector("input");

// keyup, keydown, keypress

// function handleKey(event)
// {
//     console.log(event);
// }

// keyup ---> when you release key
// keydown ---> shift and backspace also
// keypress ---> no shift, backspace
// ip.addEventListener("keydown",handleKey)

// ------------------------------------------//

const ul = document.querySelector("ul");
const ip = document.querySelector("input");

function handleKeyDown(event)
{
   if(event.key=="Enter")
   {
    const li = document.createElement("li");
    li.textContent=ip.value;
    if(ip.value.trim().length!=0)
    ul.append(li);
    ip.value="";

    const lis = document.querySelectorAll("li")

    for(let li of lis)
    li.addEventListener("click",function(event)
    {
        console.log(event);
            event.target.remove();
    })

   }
}

ip.addEventListener("keydown",handleKeyDown)
