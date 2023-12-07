import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  userFormAuth,
} from "../../../utils/firebase/FirebaseAuth";
import "./SignUp.scss";
const defaultFormField = {
  name: "",
  email: "",
  password: "",
  cfm_password: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { name, email, password, cfm_password } = formFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== cfm_password) {
      alert("Password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await userFormAuth(user, { name });
      setFormFields(defaultFormField);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email-already-in-use");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="signup-container">
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-input-label"> Name</label>
        <input
          className="form-input"
          type="text"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
          required
        />
        <label className="form-input-label">Email</label>
        <input
          className="form-input"
          type="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
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
        <label className="form-input-label">Confirm Password</label>
        <input
          className="form-input"
          type="password"
          name="cfm_password"
          autoComplete="off"
          value={cfm_password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Sign Up</button>
        <div className="nav-signin">
          Already have an account?{" "}
          <Link to="/sign-in" style={{ padding: "auto 7px" }}>
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
