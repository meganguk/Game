
var result = document.getElementById("result");

var playerScore;
var computerScore;
var rounds;

function newGame()
{
   playerScore=0;
  computerScore=0;
  rounds=prompt("number of rounds");
  if(rounds <= 0 || !isFinite(rounds)) rounds =3;
  addTextResult(playerScore, computerScore, rounds);
  addText("");
}

function addTextResult(x,y,n)
{
   result.innerHTML = x + ' - ' + y + ", rounds: "+ n ;
}

newGame();

var newGamebutton = document.getElementById("new-game-button");
newGamebutton.addEventListener("click", function(){
  newGame();
});

var scissors_button = document.getElementById("scissors-button");
scissors_button.addEventListener("click", function(){
  playerMove("scissors");
                                 
});
var stone_button = document.getElementById("stone-button");
stone_button.addEventListener("click", function(){
  playerMove("stone");
});
var paper_button = document.getElementById("paper-button");
paper_button.addEventListener("click", function(){
  playerMove("paper");
});

function randomFunction()
{
  randomValue = Math.floor((Math.random() * 3) + 1);
  
  if(randomValue == 1) return "paper";
  if(randomValue == 2) return "stone";
  if(randomValue == 3) return "scissors";
}
function playerMove(playerMoves)
{
  if(playerScore == rounds || computerScore == rounds)
  {
     addText("Game over, please press the new game button!");                      return;
  }
  addText("player clicked " + playerMoves);
  computerMove = randomFunction();
  addText("computer clicked "+ computerMove);
  if( playerMoves == computerMove)
  {
      addText("DRAW");
  }
  else
  if(playerMoves == "paper" && computerMove == "stone")
  {
      playerScore = playerScore + 1;
  }
  else
  if(playerMoves == "stone" && computerMove == "scissors")
  {
      playerScore = playerScore + 1;
  }
  else
  if(playerMoves == "scissors" && computerMove == "paper")
  {
    playerScore = playerScore + 1;  
  }
  else
  {
    computerScore = computerScore + 1 ;

  }
  addTextResult(playerScore, computerScore, rounds);
  if(playerScore == rounds || computerScore == rounds)
   {
     if(playerScore == rounds)
     {
       addText("player won"); 
     }
     if(computerScore == rounds)
     {
         addText("computer won");
     }
   }
}

function addText(text)
{
  var output = document.getElementById("output");
  output.innerHTML = text + "<br>";
}