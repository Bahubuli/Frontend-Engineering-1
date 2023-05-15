const btns = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
function handleClick(event)
{
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.textContent);
    let key = event.target.textContent;
    if(key=="X")
     key="*";
    if(key=="C")
    screen.textContent="";
    else if(key=="=")
    {
        screen.textContent=eval(screen.textContent)
    }
    else
    screen.textContent += key;
}

for(btn of btns)
{
    btn.addEventListener("click",handleClick)
}
