"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [empData, setEmpData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/employees")
      .then((response) => response.json())
      .then((data) => setEmpData(data));
  }, []);
  return (
    <div className="container text-center">
      <h1 className="badges bg-warning">Empoyees Information</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Salary</th>
          </tr>
        </thead>
        <tbody className="table table-success">
          {empData.map((emp) => (
            <tr key={emp.eid}>
              <td>{emp.eid}</td>
              <td>{emp.ename}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
