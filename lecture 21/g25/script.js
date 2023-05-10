// const div = document.querySelector("div");

// traversing to children
// div.children[0].style.color="blue"


// const batman = document.querySelector(".dc");

// // sibling
// batman.previousElementSibling.style.color="red";

// batman.nextElementSibling.style.color="red"

// // parent
// // backgound-color --> backgoundColor
// batman.parentElement.style.backgroundColor="aqua"

// const aquaman = document.createElement("li")

// aquaman.textContent = "Aquaman"

// const ul = document.querySelector("ul");
// ul.appendChild(aquaman)

// append prepend children insert
// ul.append(aquaman)
// ul.prepend(aquaman);

// before after for insert sibling
// batman.after(aquaman);
// batman.before(aquaman);

// const ul = document.querySelector("ul");

// insert an image after
// create img element
// put link in src
// const imgEl = document.createElement("img");

// imgEl.setAttribute("src","https://images.unsplash.com/photo-1683573254548-ebb7b94d7def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80")

// ul.after(imgEl)

// remove any element
// ul.remove()

// const btn2 = document.querySelector("#btn2")

// function cry()
// {
//     console.log("i am crying");
// }

// function sing()
// {
//     console.log("i am singing")
// }

// btn2.onclick = sing
// btn2.onclick = cry

// event listeners
// const btn2 = document.querySelector("#btn2")

// btn2.addEventListener("click",sing)
// btn2.addEventListener("click",cry)

function handleClick(event)
{
    console.log(event);
    console.log(event.target)
    console.log(event.target.textContent)
}

const btn2 = document.querySelector("#btn2")

btn2.addEventListener("click",handleClick)

const lis = document.querySelectorAll("li");
function handlecopy()
{
    console.log("don't copy me ☹☹")
}

for(li of lis)
{
    li.addEventListener("copy",handlecopy)
}
