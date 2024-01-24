"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [empdata, setEmpdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/employees")
      .then((response) => response.json())
      .then((data) => setEmpdata(data));
  }, []);
  return (
    <div className="container text-center">
      <h2 className="badge bg-warning text-dark">Employee Details</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <td>EID</td>
            <td>Employee Name</td>
            <td>Employee Salary</td>
          </tr>
        </thead>
        <tbody className="table table-success">
          {empdata.map((emp) => (
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
