const screen = document.querySelector(".screen");

const btns = document.querySelectorAll("button")

function handleClick(event)
{
   let key = event.target.textContent;
   if(key=="C") screen.textContent=""
   else if(key=="=")
   {
    screen.textContent = eval(screen.textContent)
   }
   else
   {
    if(key=="X") key="*"
    screen.textContent+=key;
   }

}

for(btn of btns)
{
    btn.addEventListener("click",handleClick)
}
