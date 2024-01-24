import React from "react";
import DisplayStudentInfo from "./DisplayStudentInfo";
import ModifyStudent from "./ModifyStudent";

const page = () => {
  return (
    <div>
      <h2 className="text-center">MySQL with Server Action in Next JS</h2>
      <ModifyStudent />
      <DisplayStudentInfo />
    </div>
  );
};

export default page;
