class Employee {
  protected readonly creationDate: Date;
  protected Name: string;
  protected age: number;

  constructor(
    protected employeeName: string = "na",
    protected employeeAge: number = 0
  ) {
    this.Name = employeeName;
    this.age = employeeAge;
  }

  protected details(): string {
    return `name: ${this.Name} \n Age: ${this.age}`;
  }
}

class subEmployees extends Employee {
  private readonly salary: number = 10000;

  private subEmpAddress: string;
  private subEmpPhone: number;

  protected Name: string;
  protected age: number;

  constructor(
    protected employeeName: string,
    protected employeeAge: number,
draft/crazy-glade
    private subEmpAddresss: string,
    private subEmpPhones: number
  ) {
    super(employeeName, employeeAge);
    this.subEmpAddress = subEmpAddresss;
    this.subEmpPhone = subEmpPhones;

    private subEmpAddress: string,
    private subEmpPhone: number
  ) {
    super(employeeName, employeeAge);
    this.subEmpAddress = subEmpAddress;
    this.subEmpPhone = subEmpPhone;
    main
  }
}
