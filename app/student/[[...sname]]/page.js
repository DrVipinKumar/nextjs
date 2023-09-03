import React from "react";

const page = ({ params }) => {
  const { sname } = params;
  const displayReports = () => {
    switch (sname) {
      case "ravi":
        return "Report of Ravi";
      case "rajul":
        return "Report of Rajul";
      case "vipin":
        return "Report of Dr. Vipin";
      case "sachin":
        return "Report of Sachin";
      default:
        return sname ? "Report of " + sname : "Welcome to Student Reports";
    }
  };
  return <div>{displayReports()}</div>;
};

export default page;
