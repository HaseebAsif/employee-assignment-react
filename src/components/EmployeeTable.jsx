import React from "react";

const EmployeeTable = ({ employeeData }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        {employeeData.map((item, id) => (
          <tbody key={id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.salary}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default EmployeeTable;
