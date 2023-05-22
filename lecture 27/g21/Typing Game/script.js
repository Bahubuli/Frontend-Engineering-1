const wordEl = document.querySelector(".word");
const ipEl = document.querySelector("input");
const timerEl = document.querySelector(".timer");
const scoreEl = document.querySelector(".score");

const gameOverEl = document.querySelector(".game-over")

const contEl =document.querySelector(".container")
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
    if(time<=0)
    {
        clearInterval(id)
        contEl.style.display="none"
        gameOverEl.style.display="flex";
        gameOverEl.textContent = `Game Over and your score was ${score}`
    }
    else
    {
        time--;
        timerEl.innerHTML=`Time: ${time}`
    }

}

let id = setInterval(updateTime,1000);
updateWord();
ipEl.addEventListener("keyup",function(event)
{
    if(word==ipEl.value)
    {

         console.log(score);
         updateWord()
         updateScore()
         ipEl.value=""
         time=time+1;
         timerEl.innerHTML=`Time: ${time}`;
    }
})
