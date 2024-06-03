class Employee {
  private _salary: number;

  constructor(salary: number) {
    this._salary = salary;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(newSalary: number) {
    if (newSalary >= 0) {
      this._salary = newSalary;
    } else {
      throw new Error("Invalid salary amount");
    }
  }
}

// Usage
const employee = new Employee(500);
console.log(`The employee's salary is: ${employee.salary}`);
