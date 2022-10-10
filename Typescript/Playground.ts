class PopSmoke {
  private name: string;
  private dead: boolean;
  protected RapperMostWatched: string;
  private static RappersDeadCount: number;

  constructor(
    private Smokename: string,
    private SmokeDead: boolean,
    protected RapperMostView: string
  ) {
    this.dead = SmokeDead;
    this.name = Smokename;
    this.RapperMostWatched = RapperMostView;
    PopSmoke.RappersDeadCount += this.dead ? 1 : 0;
  }

  describe(): string {
    return `name: ${this.name} \n is ${this.name}: ${this.dead}`;
  } // thats good

  // accessor and mutator
  public set setName(name: string) {
    this.name = name;
  }
  public get getName(): string {
    return this.name;
  }

  public set setDead(isDead: boolean) {
    this.dead = isDead;
  }
  public get getDead(): boolean {
    return this.dead;
  }

  public static getDeadRappersCount(): number {
    return PopSmoke.RappersDeadCount;
  }
}

class Tantacion extends PopSmoke {
  private deathYear: Date;
  protected RapperMostView;

  constructor(
    private RapperName: string,
    private RapperIsDead: boolean,
    private RapperDeathYear: Date,
    protected RapperMostViews: string
  ) {
    super(RapperName, RapperIsDead, RapperMostViews);
    this.deathYear = RapperDeathYear;
    this.RapperMostView = RapperMostViews;
  }

  TantacionDescription(): string {
    return super.describe() + ` \n deathYear:  \n ${this.RapperDeathYear}`;
  }

  getChildMostView(): string {
    return `Most View: ${this.RapperMostView} \n More ${
      super.RapperMostWatched
    } ${super.getName}`;
  }
}
