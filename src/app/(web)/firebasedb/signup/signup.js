import firebase_app from "../FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth(firebase_app);
const signup = async (email,pwd) => {
  let result = null,
    error = null;
  console.log(auth);
  try {
    result = await createUserWithEmailAndPassword(auth, email, pwd);
  } catch (e) {
    error = e;
  }
  return { result, error };
};

export default signup;
