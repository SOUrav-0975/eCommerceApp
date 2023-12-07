import React from "react";
import {
  signInWithGooglePopup,
  userFormAuth,
} from "../../../utils/firebase/FirebaseAuth";

const SignIn = () => {
  const googlUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await userFormAuth(user);
  };
  return (
    <>
      <div>SignIn</div>
      <button onClick={googlUser}>Signin with Google</button>
    </>
  );
};

export default SignIn;
