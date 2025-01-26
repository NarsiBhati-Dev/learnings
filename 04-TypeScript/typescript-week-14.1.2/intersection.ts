type Employee = {
  name: string;
  age: number;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "Narsi",
  age: 24,
  department: "IT",
};

console.log(teamLead);
