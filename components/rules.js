class Rules {
  constructor() {
    this.rules = document.querySelector("#app_rules");
    this.rules_container = document.querySelector("#app_rules_show");
    this.rules_close = document.querySelector("#app_rules_close");
  }
  init() {
    this.rules.addEventListener("click", () => this.showRules());
    this.rules_close.addEventListener("click", () => this.hideRules());
  }
  showRules() {
    this.rules_container.classList.add("visible");
  }
  hideRules() {
    this.rules_container.classList.remove("visible");
  }
}

export const rules = new Rules();
rules.init();
