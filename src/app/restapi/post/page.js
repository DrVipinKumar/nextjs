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
  const submitPUT = (event) => {
    event.preventDefault();
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (empRec.eid) {
      fetch(`http://localhost:3000/api/employees?eid=${empRec.eid}`, {
        method: "PUT",
        headers: headers,
        mode: "cors",
        body: JSON.stringify(empRec),
      }).then((response) => {
        if (response.status === 200) {
          alert("Record Updated");
        }
      });
    } else {
      alert("Enter EID");
    }
  };
  const submitDELETE = (event) => {
    event.preventDefault();
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (empRec.eid) {
      fetch(`http://localhost:3000/api/employees?eid=${empRec.eid}`, {
        method: "DELETE",
        headers: headers,
        mode: "cors",
      }).then((response) => {
        if (response.status === 200) {
          alert("Record Deleted");
        }
      });
    } else {
      alert("Enter EID");
    }
  };

  const submitPOST = (event) => {
    event.preventDefault();
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(empRec),
    }).then((response) => {
      if (response.status === 200) {
        alert("Record Inserted");
      }
    });
  };
  return (
    <div className="container text-center">
      <h2 className="badge bg-success">Insert Employee Records</h2>
      <form
        method="POST"
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
        <div className="d-flex flex-row">
          <button
            type="submit"
            onClick={submitPOST}
            className="btn btn-primary col-3 m-2"
          >
            POST
          </button>
          <button
            type="submit"
            onClick={submitPUT}
            className="btn btn-primary col-3 m-2"
          >
            PUT
          </button>
          <button
            type="submit"
            onClick={submitDELETE}
            className="btn btn-primary col-3 m-2"
          >
            DELETE
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
