const screen = document.querySelector(".screen");
const btns = document.querySelectorAll("button");

function handleClick(event)
{
    // console.log(event.target.textContent);
    let key=event.target.textContent
    if(key=="X") key="*";

    if(key=="=")
    screen.textContent=eval(screen.textContent);

    else if(key=="C")
        screen.textContent="";

    else
    screen.textContent+=key

}
for(btn of btns)
{
    btn.addEventListener("click",handleClick);
}
