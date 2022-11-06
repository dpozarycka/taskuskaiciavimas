// Views
var p1ScoreView = document.querySelector(".p1ScoreView");
var p2ScoreView = document.querySelector(".p2ScoreView");
var initGames = document.querySelector('.initGames');
var totalGames = document.querySelector('.totalGames');

// Buttons
var numbers = document.querySelector('input');
var p1Btn = document.querySelector('.p1Btn');
var p2Btn = document.querySelector('.p2Btn');
var reset = document.querySelector('.reset');
var btn = document.querySelector('button');

// Variables
var p1Score = 0;
var p2Score = 0;
var init = 0;
var total = 1;
var gameOver = false;

p1Btn.addEventListener('click', function(){
  if(!gameOver){
    p1Score++;
    init++;
    p1ScoreView.textContent = p1Score;
    initGames.textContent = init;
    if( p1Score == total){
      p1ScoreView.classList.toggle('gameOver');
      gameOver = !gameOver;
    }
  }
});

p2Btn.addEventListener('click', function(){
  if(!gameOver){
    p2Score++;
    init++;
    p2ScoreView.textContent = p2Score;
    initGames.textContent = init;
    if( p2Score == total){
      p2ScoreView.classList.toggle('gameOver');
      gameOver = !gameOver;
    }
  }
});

reset.addEventListener('click', function(){
  p1Score = 0;
  p2Score = 0;
  init = 0;
  initGames.textContent = init;
  p1ScoreView.textContent = p1Score;
  p2ScoreView.textContent = p2Score;
  gameOver = !gameOver;
  p1ScoreView.classList.remove('gameOver');
  p2ScoreView.classList.remove('gameOver');
});

numbers.addEventListener('change', function(){
  total = numbers.value;
  totalGames.textContent = total;
});