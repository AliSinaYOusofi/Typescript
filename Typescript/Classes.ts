class Students {
  
  private student_name: string;
  private student_age: string;
  private student_full_name: string;

  constructor(
    student_name: string = "na",
    student_age: string = "na",
    student_full_name: string = "na"
  ) {
    this.student_age = student_age;
    this.student_name = student_name;
    this.student_full_name = student_full_name;
  }

  public getDetails(): string {
    return `name: ${this.student_name} \n age: ${this.student_age} \n full name: ${this.student_full_name}`;
  }

  public setDetails(
    student_name: string = "na",
    student_age: string = "na",
    student_full_name: string = "na"
  ): void {
    this.student_name = student_name;
    this.student_age = student_age;
    this.student_full_name = student_full_name;
  }

  public setName(name: string): void {
    this.student_name = name;
  }
  public setStudentAge(age: number): void {
    this.student_age = age;
  }
  public setStudentFullName(full_name: string = "na") {
    this.student_full_name = full_name;
  }
}
