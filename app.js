 function makeBubble(){
  var clutter ="";
  for (var i=1; i<=133; i++) {
   var rn = Math.floor(Math.random()*10)
   clutter +=`<div class="bubble">${rn}</div>`
   
  }
  document.querySelector("#pbtm").innerHTML = clutter ;
 }
//timer 
var timer = 60;
function runTimer(){
  var timerint = setInterval(function(){
    if(timer>0){
      timer--;
    document.querySelector('#timerVal').textContent = timer
    } else{
      clearInterval(timerint)
      document.querySelector('#pbtm').innerHTML = `<h2>Game over</h2>`
    }
    
  },1000)
}

//hit code
randomNumber = 0;
function getNewHit(){
  randomNumber = Math.floor((Math.random()*10));
  document.querySelector('#hitval').textContent = randomNumber
}
//score
var score = 0
function increaseScore(){
score += 10;
document.querySelector('#scoreval').textContent = score
}

document.querySelector('#pbtm').addEventListener('click',function(details){
  var clickedNum = Number(details.target.textContent)
 if(clickedNum === randomNumber){
  increaseScore()
  makeBubble()
  getNewHit();
 }
})

getNewHit()
runTimer()
makeBubble()
increaseScore()