class Human {
  constructor(humanName, humanVersion, humanExinct) {
    this.humanName = humanName;
    this.humanVersion = humanVersion;
    this.humanExinct = humanExinct;
  }
  get currentHumanName() {
    return this.humanName;
  }
  get currentHumanVersion() {
    return this.humanVersion;
  }
  get currentHumanExtinction() {
    return this.humanExinct;
  }
}
class ModernHuman extends Human {
  constructor(humanName, humanVersion, humanExinct) {
    super(humanName, humanVersion, humanExinct);
  }
  infoAboutThisHumanVersion() {
    return `this ${this.currentHumanName} is ${
      this.currentHumanExtinction ? "extinct" : "alive"
    } and version ${this.currentHumanVersion}`;
  }
  extinctionYearOfThisHumanVersion() {
    return new Date("2071");
  }
  currentThisHumanPopulation() {
    return this.currentHumanVersion <= 10 ? 1000 : 2000;
  }
}
let moderHuman = new ModernHuman("Ali", 33.313, false);
console.log(moderHuman.infoAboutThisHumanVersion());
console.log(moderHuman.currentThisHumanPopulation());
