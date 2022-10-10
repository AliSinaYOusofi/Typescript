abstract class Human {
    constructor(
        private humanName : string,
        private humanVersion: number,
        private humanExinct: boolean
    ) {}

    abstract infoAboutThisHumanVersion() : string;
    abstract extinctionYearOfThisHumanVersion() : Date;
    abstract currentThisHumanPopulation() : number;

    get currentHumanName() : string { return this.humanName}
    get currentHumanVersion() : number { return this.humanVersion}
    get currentHumanExtinction() : boolean { return this.humanExinct}
}

class ModernHuman extends Human {

    constructor(
        humanName : string,
        humanVersion: number,
        humanExinct: boolean
    ) {
        super(
            humanName,
            humanVersion,
            humanExinct
        )
    }
    
    infoAboutThisHumanVersion(): string {
        return `this ${this.currentHumanName} is ${this.currentHumanExtinction ? "extinct" : "alive"} and version ${this.currentHumanVersion}`
    }
    extinctionYearOfThisHumanVersion(): Date {
       return new Date("2071")
    }
    currentThisHumanPopulation(): number {
       return this.currentHumanVersion <= 10 ? 1000 : 2000;
    }
}

let moderHuman : ModernHuman  = new ModernHuman("Ali", 33.313, false);
console.log(moderHuman.infoAboutThisHumanVersion())
console.log(moderHuman.currentThisHumanPopulation())