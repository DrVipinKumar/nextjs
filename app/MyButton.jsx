import React from "react";

const MyButton = (props) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          //event handler
          props.onPress("Dr. Vipin Teotia");
        }}
      >
        Change My Name
      </button>
    </div>
  );
};

export default MyButton;
