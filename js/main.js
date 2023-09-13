let btnAgain = document.getElementById("btnAgain");
let btnCheck = document.getElementById("btnCheck");
let message = document.getElementById("message");
let scoreNumber = document.getElementById("score");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score =20 ;
let highScore = 0 ;

btnCheck.addEventListener("click", function () {
  let checkNumber = Number(document.getElementById("check").value);

  if (!checkNumber) {
    message.textContent = `⛔ No Number !`;
  } else if (checkNumber > secretNumber) {
    message.textContent = `⬆ That's high !`;
    score--;   
    scoreNumber.textContent != 0 ?scoreNumber.textContent =score:message.textContent =`💥 You lose`;
  } else if (checkNumber < secretNumber) {
    message.textContent = `⬇ That's low !`;
    score--;
    scoreNumber.textContent != 0 ?scoreNumber.textContent =score:message.textContent =`💥 You lose`;
  } else if (checkNumber === secretNumber) {
    message.textContent = `🎉 Congratulations 🎊`;
    document.querySelector('.guessNumber').textContent = checkNumber ;
    document.body.style.backgroundColor =`rgb(162, 241, 197)` ; document.body.removeAttribute('class');
    highScore<score ?document.getElementById("highScore").textContent = score : document.getElementById("highScore").textContent=highScore;
  }
});

btnAgain.addEventListener("click" , function(){
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = `🕹 Start guessing ...`;
  document.body.setAttribute('class' , 'bg-info');
  document.querySelector('.guessNumber').textContent = `?`;
  scoreNumber.textContent = 20 ;
  document.getElementById("highScore").textContent=score;
  score = 20 ;
  document.getElementById("check").value = ''
 }
 ) ;