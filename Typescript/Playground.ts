class PopSmoke {
  private name: string;
  private dead: boolean;

  constructor(private Smokename: string, private SmokeDead: boolean) {
    this.dead = SmokeDead;
    this.name = Smokename;
  }

  describe(): string {
    return `name: ${this.name} \n is ${this.name}: ${this.dead}`;
  }
}

class Tantacion extends PopSmoke {
  private deathYear: Date;

  constructor(
    private RapperName: string,
    private RapperIsDead: boolean,
    private RapperDeathYear: Date
  ) {
    super(RapperName, RapperIsDead);
    this.deathYear = RapperDeathYear;
  }

  TantacionDescription(): string {
    return super.describe() + ` \n deathYear:  \n ${this.RapperDeathYear}`;
  }
}

let XXX: Tantacion = new Tantacion("XxxTantaction", true, new Date("2018"));
console.log(XXX.describe());
