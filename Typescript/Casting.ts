interface Employee {
  name: string;
  last: string;
}

interface Work {
  grid: boolean;
  lost: string;
}

type ofBoth = Employee | Work;

let dict: ofBoth = {
  name: "ALi",
  last: "Last",
  grid: true,
  lost: "yes",
};

let employee: Employee = {
  name: "Fuck",
  last: "No",
};

let worker: Work = {
  grid: true,
  lost: "fuck",
};

let BothWorker: Work & Employee = {
  name: "fuc",
  lost: "no",
  grid: true,
  last: "lst",
};

let lengthOf: string = "Helloworld";
let findLength: number = (lengthOf as string).length;
let lengthAsNumber: string = (lengthOf as string).split("")[0].toString();
console.log(findLength, lengthAsNumber);

// not the same as other languages

class Class {
  private className: string;

  constructor(private classMainName: string) {
    this.className = classMainName;
  }

  get getClassName(): string {
    return this.className;
  }
}

class Hovering {
  private isHovered: boolean;

  constructor(private isHovering: boolean) {
    this.isHovered = isHovering;
  }

  get getHovering(): boolean {
    return this.isHovered;
  }
  moreData(data: string = "not passed"): string {
    return "more Data Returned" + data;
  }
}

let Classy = new Class("main Class Name");
let Hover = new Hovering(true);

console.log((Classy as unknown as Hovering).moreData("data")); // what the fuck

// why is it now working find
let working: string = "one";
let lengthOf: number = (working as string).length;
