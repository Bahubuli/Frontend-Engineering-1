const wordEl = document.querySelector(".word");
const ipEl = document.querySelector("input");
const timerEl = document.querySelector(".timer");
const scoreEl = document.querySelector(".score");

ipEl.focus()
let word="",score=0,time=10;

let words = [

    "car",
    "bike",
    "school",
    "college",
    "phone",
    "laptop"
]

function getRandomWord()
{
    let idx = Math.random()*words.length;
    idx = parseInt(idx);
    return words[idx];
}
function updateWord()
{
    word = getRandomWord();
    wordEl.textContent= word;
}

function updateScore()
{
    score++;
    scoreEl.innerHTML=`Score: ${score}`;
}

function updateTime()
{
    time=time+1;
    
}

updateWord()
ipEl.addEventListener("keyup",function(event)
{
    if(word==ipEl.value)
    {

         console.log(score);
         updateWord()
         updateScore()
         updateTime();
         ipEl.value=""
    }
})
