// console.log("start");

// function delay()
// {
//     let time = new Date().getTime()
//     let time2 = new Date().getTime()+5000

//     while(time<time2)
//     time = new Date().getTime();
//     // time in millisecond from 1970

//     console.log(time);

// }

// function changeh1()
// {
//     const h1 = document.querySelector("h1");
//     h1.classList.toggle("red");
// }
// delay();
// changeh1();
// console.log("end");

// function changeh1()
// {
//     const h1 = document.querySelector("h1");
//     h1.classList.toggle("red");
//     console.log("h1 is changed")
// }
// // setTimeout cleaTimeout
// console.log("start");
// let id = setTimeout(changeh1,2000);
// console.log("end");

// const btn = document.querySelector("button");

// btn.addEventListener("click",function()
// {
//     clearTimeout(id)
// })

// setTimeout cleaTimeout
// console.log("start");
// let id = setInterval(changeh1,200);
// console.log("end");

// const btn = document.querySelector("button");

// btn.addEventListener("click",function()
// {
//     clearInterval(id)
// })

// show countdown from 9 to 0

const h1 = document.querySelector("h1");
const pause = document.querySelector("#pause");
const resume = document.querySelector("#resume");


let time = prompt("enter time")
let id = setInterval(reduceTime,1000);
function reduceTime()
{
    time --;
    if(time<=0) clearInterval(id);
    h1.innerHTML=`Remaining Time: ${time}`
}

pause.addEventListener("click",function()
{
    clearInterval(id);
})

resume.addEventListener("click",function()
{
    id = setInterval(reduceTime,1000);
})
