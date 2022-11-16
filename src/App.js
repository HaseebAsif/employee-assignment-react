import React from "react";
import "./App.css";
import EmployeeTable from "./components/EmployeeTable";

const data = [
  {
    id: 1,
    name: "John",
    age: "20",
    salary: "20000",
  },
  {
    id: 2,
    name: "Marsh",
    age: "26",
    salary: "50000",
  },
  {
    id: 3,
    name: "Finn",
    age: "33",
    salary: "80000",
  },
];
const App = () => {
  return (
    <div>
      <EmployeeTable employeeData={data} />
    </div>
  );
};

export default App;
