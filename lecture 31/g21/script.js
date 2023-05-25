const ip = document.querySelector("input");
const ul = document.querySelector("ul");

// getItem
let arr= JSON.parse(localStorage.getItem("arr")) || [];

for( item of arr)
{
    const li = document.createElement("li");
    li.textContent=item;
    ul.append(li);
}


console.log(arr);
ip.addEventListener("keyup",function(event)
{
     if(event.key=="Enter")
     {
        let value = ip.value;
        arr.push(value);
        ip.value=""
        const li = document.createElement("li");
        li.textContent=value;
        ul.append(li);
        // setItem
        localStorage.setItem("arr",JSON.stringify(arr))
     }
})
