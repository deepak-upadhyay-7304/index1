let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;
let max = 0;
let highScore = [];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false) {
        console.log("game is started");
        started = true;

        levelup();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}


function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4 );
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score is <b>${level}</b> <br>Press any key to start.`;
        showHigh();
    
        alert(`highest score is ${max}`);


        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 1000 );
        reset();
        
    }

    
}

function btnPress (){
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userSeq)

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    

}

function showHigh() {
    highScore.push(level);
    console.log(highScore);
     max = highScore[0];
    for (let i = 1; i < highScore.length; i++) {
        if (highScore[i] > max) {
            max = highScore[i];
        }
    }

    content.innerText = `Highest Score is ${max}`;
    
   
    console.log( `highest score is ${max}`);
    
}

    
    const button = document.getElementById('toggleButton');
    const content = document.getElementById('content');
    //content.innerText = `Highest Score is ${max}`;
    button.addEventListener('click', () => {
    if (content.style.display === 'none') {
      content.style.display = 'block';
      button.textContent = 'Hide';
    } else {
      content.style.display = 'none';
      button.textContent = 'Show Highest Score';
    }
  });


