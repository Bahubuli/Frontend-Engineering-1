const ip = document.querySelector("input");
const ul = document.querySelector("ul");


function handleInput(event)
{

  if(event.key=="Enter")
  {
     const li = document.createElement("li");
     li.textContent = ip.value;
     ul.append(li);
     ip.value=""

     const lis = document.querySelectorAll("li");

     for(let li of lis)
     {
     li.addEventListener("click",function(event)
     {
        event.target.remove();
     })
    }

  }
}

ip.addEventListener("keydown",handleInput)

const img = document.createElement("img");

img.setAttribute("src","https://images.unsplash.com/photo-1683643593317-be972fa421d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")

ul.after(img);

console.log(eval("6+3*5"))
