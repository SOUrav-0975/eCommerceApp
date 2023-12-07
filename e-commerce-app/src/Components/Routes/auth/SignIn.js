import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  userFormAuth,
  signiInAuthUserWithEmailAndPassword,
} from "../../../utils/firebase/FirebaseAuth";

import "./Sign-in.scss";
const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signiInAuthUserWithEmailAndPassword(email, password);

      setFormFields(defaultFormField);
    } catch (error) {
      if (error.code === "auth/wrong--password") {
        alert("Incorrect Password for this Email");
      } else if (error.code === "auth/user-not-found") {
        alert("No user registered with this email");
      } else {
        console.log(error);
      }
    }
  };
  const signinWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await userFormAuth(user);
  };

  return (
    <>
      <div className="signin-container">
        <h1>SignIn</h1>
        <form onSubmit={handleSubmit}>
          <label className="form-input-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
          <label className="form-input-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Sign In</button>
        </form>
        <button onClick={signinWithGoogle}>Sign in with Google</button>
        <div className="nav-signin">
          or Not having an account?
          <Link to="/sign-up" style={{ padding: "auto 7px" }}>
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
