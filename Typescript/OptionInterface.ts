interface Employees {
  firstName: string;
  middleName?: string;
  lastName: string;
  age: number;
}

function getEmployees(employee: Employees): string {
  return employee.middleName
    ? `name: ${employee.firstName} middle ${employee.middleName} last: ${employee.lastName} age: ${employee.age}`
    : `name: ${employee.firstName} last: ${employee.lastName} age: ${employee.age}`;
}

let empWithMiddelName: {
  firstName: string;
  lastName: string;
  middleName?: string;
  age: number;
};

empWithMiddelName = {
  firstName: "Hackun Wium",
  lastName: "Lie",
  middleName: "Great",
  age: 100,
};

let empWithoutMiddelName: {
  firstName: string;
  lastName: string;
  middleName?: string;
  age: number;
};

empWithoutMiddelName = {
  firstName: "Vitalik",
  lastName: "Buterin",
  age: 28,
};

console.log(getEmployees(empWithMiddelName));
console.log(getEmployees(empWithoutMiddelName));
