// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.querySelector(`#game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`user-name`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score-paragraph`);
const gameHistoryParagraph = document.getElementById(`game-history-paragraph`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = `<p>${userName.value}: ${game.score.user} v CPU: ${game.score.cpu}</p>`;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  let game = [ gameHistoryParagraph.innerText ];
  gameHistoryParagraph.innerHTML = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (event) {
  event.preventDefault();
  const username =
  // eslint-disable-next-line no-undef
  game = new RockPaperScissors(userName);

  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`);

  // Complete
});



// go-button EventListener
goButton.addEventListener(`click`, function () {
  // eslint-disable-next-line no-undef
  userselection = userSelection.value;
  // eslint-disable-next-line no-undef
  game.play(userselection);
  updateScoreTallyUI();
  updateGameHistoryUI();
});