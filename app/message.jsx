import React from "react";

function Message(props) {
  return (
    <div>
      Welcome to {props.msg[0]} for Learning {props.msg[1]}
    </div>
  );
}
const Message2 = (props) => {
  const { name, lang } = props.msgobj;
  return (
    <div>
      Welcome to {name} for Learning {lang} by Message 2nd
    </div>
  );
};

export default Message;
export { Message2 };
