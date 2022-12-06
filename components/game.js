class Game {
  constructor() {
    this.choices = [...document.querySelectorAll("div.choice")];
    this.background = document.querySelector("#app_game_background");
    this.user = "";
    this.score = document.querySelector("#counter");
    this.wonCounter = 0;
    this.UIItem = document.querySelector("#app_game_choice_UI");
    this.UIItemImage = document.querySelector("#UI_image");
    this.gameResults = document.querySelector("#app_game_results");
    this.playAgainBtn = document.querySelector("#play_again");
    this.resultText = document.querySelector("#app_game_result_text");
  }

  init() {
    for (const choice of this.choices) {
      choice.addEventListener("click", () => this.userChoice(choice));
    }
    this.playAgainBtn.addEventListener("click", () => this.restartGame());
  }

  userChoice(userChoice) {
    this.user = userChoice.dataset.item;
    this.background.classList.add("hidden");
    for (const choice of this.choices) {
      if (choice !== userChoice) {
        choice.classList.add("hidden");
      } else {
        choice.classList.add("user_choice");
        this.scoreParser(this.user);
      }
    }
  }

  scoreParser(userSelect) {
    let UIIndex = Math.round(Math.random() * (this.choices.length - 1));
    let UIChoice = this.choices[UIIndex];
    var UIDataSet = UIChoice.dataset.item;
    let won = "you won";
    let draw = "draw";
    let lose = "you lose";

    this.showUIChoice(UIDataSet);
    if (userSelect === "paper") {
      if (UIDataSet === "rock") {
        return this.gameResult(won);
      } else if (UIDataSet === userSelect) {
        return this.gameResult(draw);
      }
      return this.gameResult(lose);
    } else if (userSelect === "scissors") {
      if (UIDataSet === "paper") {
        return this.gameResult(won);
      } else if (UIDataSet === userSelect) return this.gameResult(draw);
      return this.gameResult(lose);
    } else {
      if (UIDataSet === "scissors") {
        return this.gameResult(won);
      } else if (UIDataSet === userSelect) return this.gameResult(draw);
      return this.gameResult(lose);
    }
  }

  showUIChoice(UI) {
    setTimeout(() => {
      this.UIItem.classList.add(`visible`);
      this.UIItem.classList.add(`${UI}`);
      this.UIItemImage.src = `/images/icon-${UI}.svg`;
    }, 1000);
  }

  gameResult(text) {
    setTimeout(() => {
      if (text === "you won") {
        this.wonCounter++;
        this.score.innerText = this.wonCounter;
      }
      this.resultText.innerHTML = text;
      this.gameResults.classList.add("visible");
    }, 1000);
  }

  restartGame() {
    this.user = "";
    this.UIItem.classList.add("hide_on_sec");
    this.gameResults.classList.remove("visible");
    setTimeout(() => {
      this.UIItem.classList = "choice_UI";
      this.UIItem.classList.remove(`visible`);
      for (const choice of this.choices) {
        choice.classList.remove("hidden");
        choice.classList.remove("user_choice");
        this.background.classList.remove("hidden");
      }
    }, 1000);
  }
}
export const game = new Game();
game.init();
