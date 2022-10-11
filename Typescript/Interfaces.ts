interface Employees {
  firstName: string;
  lastName: string;
  age: number;
}

function getEmployees(employee: Employees): string {
  return `name: ${employee.firstName} last: ${employee.lastName} age: ${employee.age}`;
}

let firstEmployee: {
  firstName: string;
  lastName: string;
  age: number;
};

firstEmployee = {
  firstName: "Keviv",
  lastName: "P Ryan",
  age: 79,
};
let firstEmployee1: {
  firstName: string;
  lastName: string;
  age: number;
};

firstEmployee1 = {
  firstName: "Hackun",
  lastName: "Wium Lie",
  age: 79,
};

// the function getEmployees() : accepts any two string property
// with optional parameters

