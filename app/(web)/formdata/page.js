import React from "react";

const page = () => {
  return (
    <div>
      <h2>Login Information</h2>
      <form
        action="/api/readformdata"
        method="post"
        className="d-flex flex-column col-3 m-3"
      >
        <label>Enter your name</label>
        <input type="text" name="username" />
        <label>Enter your password</label>
        <input type="password" name="pass" />
        <button type="submit" className="btn btn-warning m-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default page;
