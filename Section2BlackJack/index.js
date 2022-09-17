getRandomNumber = () => {
  let randomNumber = Math.floor(Math.random()*13)+1;

  if (randomNumber >= 10)
  {
    return 10;
  }
  else if (randomNumber === 1)
  {
    return 11;
  }
  else
  {
    return randomNumber;
  }
}

let total = 0;
let cardsArray = []
let hasBlackJack = false;
let isAlive = false;
let gameBegun = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");
console.log(1)

let player = {
  pname: "Naren",
  chips: 200
}

playerEl.textContent = player.pname + " : $" + player.chips;

function startGame()
{
  if (gameBegun === true)
  {return;}
  gameBegun = true;
  isAlive = true;
  firstCard = getRandomNumber();
  secondCard = getRandomNumber();
  total = firstCard+secondCard;
  cardsArray.push(firstCard);
  cardsArray.push(secondCard);
  renderGame();
}

function renderGame()
{
  sumEl.textContent = "Sum: " + total;
  let cardscontent = "Cards: "
  for (let i=0;i<cardsArray.length;i++)
  {
    cardscontent += " " + cardsArray[i];
  }
  cardsEl.textContent = cardscontent
  if(total <= 20)
    { 
      message = " Do you want to draw a new card?? ";
    }
  else if(total == 21)
    {
      message = " wohoo!! you  have got BLACK JACK";
      hasBlackJack = true;
    }
  else
    {
      message = "you are out of the game";
      isAlive = false;
    }
    messageEl.textContent = message;
}
console.log(2);
function newCard()
{
  if (isAlive === true && hasBlackJack === false)
  {
  card = getRandomNumber();
  cardsArray.push(card);
  total += card;
  renderGame();
  }
}