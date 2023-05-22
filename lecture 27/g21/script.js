// function delay()
// {
//     let currTime = new Date().getTime();
//     let stopTime = new Date().getTime()+5000;

//     while(currTime<stopTime)
//     {
//         currTime = new Date().getTime();
//     }
//  console.log("inside function")
// }

// setTimeout
// function fun()
// {
//     console.log("Inside function");
// }

// function changeH1color()
// {
//     const h1El = document.querySelector("h1")
//     h1El.style.color="red"
// }

// console.log("Start");
// // delay();
// setTimeout(fun,4000);
// let id1 = setTimeout(changeH1color,4000)
// console.log("end");

// const btn = document.querySelector("button");
// btn.addEventListener("click",function()
// {
//     clearTimeout(id1);
// })

// setInterval
// function headingToggle()
// {
//     const h1El = document.querySelector("h1");
//     h1El.classList.toggle("red");
// }

// let id = setInterval(headingToggle,200);

// const btn = document.querySelector("button");
// btn.addEventListener("click",function()
// {
//     clearInterval(id);
// })
 let links=document.querySelectorAll('a');
 for(link of links){
 link.style.background='green';
 link.style.color='white';
 link.setAttribute('href','https://facebook.com');
 link.textContent='Facebook';
 }
