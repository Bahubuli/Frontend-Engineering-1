const ip =document.querySelector("input");
const ul = document.querySelector("ul");

ip.addEventListener("keydown",function(event)
{
    console.log(event)
if(event.key=="Enter")
{
    const li = document.createElement("li");
    li.textContent=ip.value;
    ul.append(li);
    ip.value="";
}
const lis = document.querySelectorAll("li");

for(let i=0;i<lis.length;i++)
{
    lis[i].addEventListener("click",function(event)
    {
           event.target.remove();
    })
}
})
