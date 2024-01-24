"use client";
import React, { useState } from "react";

const page = () => {
  const [empRec, setEmpRec] = useState({
    eid: "",
    ename: "",
    salary: "",
  });
  const setEmp = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setEmpRec((pEmp) => ({
      ...pEmp,
      [name]: value,
    }));
  };
  const submitEmp = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      body: JSON.stringify(empRec),
    }).then((response) => {
      if (response.status === 200) alert("Record Inserted");
    });
  };
  return (
    <div className="container text-center">
      <h2 className="badge bg-success">Insert Employee Records</h2>
      <form
        onSubmit={submitEmp}
        className="badge bg-warning d-flex flex-column justify-content-center col-6 mx-auto"
      >
        <input
          type="text"
          placeholder="Enter employee id"
          name="eid"
          value={empRec.eid}
          onChange={setEmp}
          className="rounded p-2 m-2 mx-auto col-8"
        />
        <input
          type="text"
          placeholder="Enter employee name"
          name="ename"
          value={empRec.ename}
          onChange={setEmp}
          className="rounded p-2 m-2 mx-auto col-8"
        />
        <input
          type="text"
          placeholder="Enter employee salary"
          name="salary"
          value={empRec.salary}
          onChange={setEmp}
          className="rounded p-2 m-2 mx-auto col-8"
        />
        <button type="submit" className="btn btn-primary col-3 m-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default page;
