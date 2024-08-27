let timer;
let seconds = 0;
let isRunning=false;

let sec=0;
let min=0;
let hrs=0;

const display1=document.getElementById("display");
const startBtn=document.getElementById("startBtn");
const stopBtn=document.getElementById("stopBtn");
const resetBtn=document.getElementById("resetBtn");


function updateDisplay(seconds){
     sec=seconds % 60;
     min=Math.floor((seconds/60)%60);
     hrs=Math.floor(seconds/3600);
    display1.textContent =

    `${hrs.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}
function startTimer(){
    if(timer==null){
        
        timer=setInterval(()=>{
            seconds++;
            updateDisplay(seconds);
            console.log(seconds);

        },1000);
    }
}
function stopTimer(){
    if(timer!==null){
        clearInterval(timer);
        timer=null;
    }
}
function resetTimer(){
    stopTimer();
    seconds=0;
    updateDisplay(seconds);
}
startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTimer);