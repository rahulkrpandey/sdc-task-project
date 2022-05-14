import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
import { is } from "immer/dist/internal";
import React, { ReactHTMLElement, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginHandler from "../../redux/actions/Auth.action";
import {
  useTypedSelector,
  useActionDispatch,
} from "../../redux/store/utils/useStore";

import classes from "./login_page.module.css";

const Login = () => {
  // const emailRef = useRef<HTMLInputElement>(null);
  // const passRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { loading, accessToken } = useTypedSelector((state) => state.auth);
  const dispatch = useActionDispatch();

  const clickhandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const email: string | undefined = emailRef.current?.value;
    // const password: string | undefined = passRef.current?.value;

    dispatch(LoginHandler(email, password, isSignupActive));
    console.log(email, password, isSignupActive);
    setEmail("");
    setPassword("");
  };

  const [isSignupActive, setIsSignupActive] = useState<boolean>(false);
  const changeStateHandler: React.MouseEventHandler = (event) => {
    setIsSignupActive((isSignupActive) => !isSignupActive);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passWordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && accessToken) {
      navigate("/student_id");
    }
  }, [loading, accessToken, navigate]);

  return (
    <div className={classes["login-page"]}>
      <form className={classes["login-form"]} onSubmit={clickhandler}>
        <h1 className={classes["heading"]}>
          {" "}
          {isSignupActive ? "sign up" : "dean's login"}{" "}
        </h1>
        <div className={classes["email-field"]}>
          <label htmlFor={classes["email"]}>
            {isSignupActive ? "your email" : "email"}
          </label>
          <input
            type="email"
            className={classes["email"]}
            value={email}
            onChange={emailChangeHandler}
          />
        </div>

        <div className={classes["password-field"]}>
          <label htmlFor={classes["pass"]}>
            {isSignupActive ? "your password" : "password"}
          </label>
          <input
            type="password"
            className={classes["pass"]}
            value={password}
            onChange={passWordChangeHandler}
          />
        </div>

        <button type="submit" className={classes["submit-btn"]}>
          {isSignupActive ? "sign up" : "login"}
        </button>
        <p className={classes["change-state-btn"]} onClick={changeStateHandler}>
          {isSignupActive ? "login" : "create account"}
        </p>
      </form>
    </div>
  );
};

export default Login;
