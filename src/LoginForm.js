import React, { useState, useEffect, useReducer } from "react";
import "./LoginForm.css";

const initEmail = (state, action) => {
  if (action.type === "handleChange") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
};
const LoginForm = (props) => {
  const [isValidform, setIsValidForm] = useState(false);
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const [emailState, dispatchEmail] = useReducer(initEmail, {
    value: "",
    isValid: false,
  });

  const handleEmailChange = (event) => {
    dispatchEmail({ type: "handleChange", val: event.target.value });
    setEmail(event.target.value);
  };
  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsValidForm(email.includes("@") && pswd.length > 2);
      console.log("changed");
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [email, pswd]);

  const handlePswdChange = (event) => {
    setPswd(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleClick();
  };
  return (
    <div className="LoginForm">
      <form>
        <label>Email</label>
        <br></br>
        <input
          type="text"
          onChange={handleEmailChange}
          value={emailState.value}
        ></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" onChange={handlePswdChange} value={pswd}></input>
        <br></br>
        <br></br>
        <button onClick={handleSubmit} disabled={!isValidform}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
