"use server";
import signup from "./signup";
const FirebaseServerAction = async (prevState, formData) => {
  const email = formData.get("email");
  const pwd = formData.get("pwd");
  if (email != "" && pwd != "") {
    const { result, error } = await signup(email, pwd);
    if (result != null) {
      return {
        message: "success",
      };
    } else if (error != null) {
      return {
        message: "Password should have 8 or more character!",
      };
    }
  } else {
    return { message: "Fill Email or Password" };
  }
};

export default FirebaseServerAction;
