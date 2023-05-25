const ul =  document.querySelector("ul");
const ip = document.querySelector("input");

// get from local storage
let list=JSON.parse(localStorage.getItem("list")) || [];
for(item of list)
{
    const li = document.createElement("li");
    li.textContent=item;
    ul.append(li);
}

ip.addEventListener("keyup",function(event)
{
  if(event.key==="Enter")
  {
    let value = ip.value;
    list.push(value);
    const   li = document.createElement("li");
    li.textContent=value;
    ul.append(li)
    ip.value=""
    // set to local storage
    localStorage.setItem("list",JSON.stringify(list))
   console.log(list);
  }
})
