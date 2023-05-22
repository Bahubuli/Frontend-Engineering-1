const wordEl = document.querySelector(".word");
const ipEl = document.querySelector("input");
const timeEl = document.querySelector(".time");
const scoreEl = document.querySelector(".score");

const container = document.querySelector(".container");
const gameOver = document.querySelector(".game-over")


ipEl.focus()
let words =[
    "car",
    "bike",
    "html",
    "color",
    "blue",
    "red",
    "js",
    "iron"
]

function getRandomWord()
{
    let idx = Math.floor(Math.random()*words.length)
    // console.log(words[idx]);
    return words[idx];
}

let score=0,time=10,word="";

function updateWord()
{
    word = getRandomWord();
    wordEl.textContent=word
}
function updateScore()
{
    scoreEl.innerHTML=`Score: ${score}`;
}

let id = setInterval(updateTime,1000);

function updateTime()
{
    if(time<=0)
    { clearInterval(id);
      container.style.display="none"
      gameOver.style.display="flex"

      gameOver.innerHTML=`<h2>Game Over</h2>
                           <p>Your Score Was ${score}</p>`
    }
    else
    {
        time--;
        timeEl.innerHTML=`Time: ${time}`;
    }
}



updateWord();
updateScore();
ipEl.addEventListener("keyup",function()
{
    let key = ipEl.value
    if(key==word)
    {
        score++;
        time=time+2;
        updateWord();
        updateScore();
        updateTime();
        ipEl.value=""
    }
})
