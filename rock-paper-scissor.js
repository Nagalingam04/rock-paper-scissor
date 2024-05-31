const score=JSON.parse(localStorage.getItem('score')) || {
  win:0,
  loss:0,
  tie:0
};

updateScore();

function pickMove(){
  let choice=Math.random();
  let computerMove='';
  if(choice >= 0 && choice < 1/3){
    computerMove="rock";
  }
  else if(choice >= 1/3 && choice < 2/3){
    computerMove="scissors";
  }
  else if(choice >= 2/3 && choice < 1){
    computerMove="paper";
  }
  return computerMove;
}

function playerMove(playerChoice) {
  computerMove=pickMove();
  let result='';

  if(playerChoice == 'scissors'){
    if (computerMove === 'rock'){
      result='You Lose';
    }
    else if(computerMove === 'scissors'){
      result='Game Tie';
    }
    else if(computerMove === 'paper'){
      result='You Win';
    }
  }

  else if(playerChoice == 'paper'){
    if (computerMove === 'rock'){
      result='You Win';
    }
    else if(computerMove === 'scissors'){
      result='You Lose';
    }
    else if(computerMove === 'paper'){
      result='Game Tie';
    }
  }

  else if(playerChoice=='rock'){
    if (computerMove === 'rock'){
      result='Game Tie';
    }
    else if(computerMove === 'scissors'){
      result='You Win';
    }
    else if(computerMove === 'paper'){
      result='You Lose';
    }
  }

  if(result === 'You Win'){
    score.win +=1;
  }
  else if(result === 'You Lose'){
    score.loss +=1;
  }
  else if(result === 'Game Tie'){
    score.tie +=1;
  }

  document.querySelector(".display_results")
    .innerHTML=`${result}`;

  document.querySelector(".display_choices")
    .innerHTML=` you <img src = "images/${playerChoice}-emoji.png" class="emoji"> Computer <img src="images/${computerMove}-emoji.png" class = "emoji">`;


  localStorage.setItem('score',JSON.stringify(score));

  

  updateScore();
}

function updateScore() {
  document.querySelector('.display_score')
    .innerHTML=`win: ${score.win}  lose: ${score.loss}  tie: ${score.tie}`;
}
