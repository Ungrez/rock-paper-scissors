class Game {
  constructor() {
    this.choices = [...document.querySelectorAll("div.choice")];
    this.background = document.querySelector("#app_game_background");
    this.user = "";
    this.score = document.querySelector("#counter");
    this.wonCounter = 0;
    this.UIItem = document.querySelector("#app_game_choice_UI");
    this.UIItemImage = document.querySelector("#UI_image");
  }
  init() {
    for (const choice of this.choices) {
      choice.addEventListener("click", () => this.userChoice(choice));
    }
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
    let UIDataSet = UIChoice.dataset.item;
    this.showUIChoice(UIDataSet);

    if (userSelect === "paper") {
      if (UIDataSet === "rock") {
        return (
          this.wonCounter++,
          console.log("User wygrał"),
          (this.score.innerText = this.wonCounter)
        );
      } else if (UIDataSet === userSelect) return console.log("Remis");
      return console.log("User przegrał");
    } else if (userSelect === "scissors") {
      if (UIDataSet === "paper") return console.log("User wygrał");
      else if (UIDataSet === userSelect) return console.log("Remis");
      return console.log("User przegrał");
    } else {
      if (UIDataSet === "scissors") return console.log("User wygrał");
      else if (UIDataSet === userSelect) return console.log("Remis");
      return console.log("User przegrał");
    }
  }
  showUIChoice(UI) {
    setTimeout(() => {
      this.UIItem.classList.add(`visible`);
      this.UIItem.classList.add(`${UI}`);
      this.UIItemImage.src = `/images/icon-${UI}.svg`;
    }, 1000);
  }
}
export const game = new Game();
game.init();
