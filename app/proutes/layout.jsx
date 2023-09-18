import React from "react";

const layout = ({ children, left, right }) => {
  return (
    <div className="container" style={{ height: "80vh" }}>
      <div className="d-flex h-50 col-12 bg-warning justify-content-center align-items-center">
        {children}
      </div>
      <div className="d-flex h-50 col-12">
        <div className="d-flex h-100 col-6 bg-danger justify-content-center align-items-center">
          {left}
        </div>
        <div className="d-flex h-100 col-6 bg-success justify-content-center align-items-center">
          {right}
        </div>
      </div>
    </div>
  );
};

export default layout;
