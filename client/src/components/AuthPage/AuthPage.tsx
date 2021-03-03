import React, { ReactElement, useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context";
import { useHttp, useMessage } from "../../hooks";

export const AuthPage = (props: any): ReactElement => {
  const auth: any = useContext(AuthContext);
  const message: any = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data: any = await request("https://alexlatypov94-reactgame.herokuapp.com/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {
      return;
    }
  };

  const loginHandler = async () => {
    try {
      const data: any = await request("https://alexlatypov94-reactgame.herokuapp.com/api/auth/login", "POST", { ...form });
      localStorage.setItem("UserName", form.email);
      auth.login(data.token, data.userId);
    } catch (e) {
      return;
    }
  };

  const handlerMissAuth = (e: React.MouseEvent) => {
    props.missFunc(e);
  };

  return (
    <div className="registration">
      <form action="">
        <h1 className="reg-title">Registration</h1>
        <div className="reg-inp-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" onChange={changeHandler} />
        </div>
        <div className="reg-inp-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" onChange={changeHandler} />
        </div>
        <div className="btn-entrance">
          <button className="login" disabled={loading} onClick={loginHandler}>
            Log in
          </button>
          <button className="signup" onClick={registerHandler} disabled={loading}>
            Sign up
          </button>
        </div>

        <a href="#" onClick={handlerMissAuth}>
          Continue without registration
        </a>
      </form>
    </div>
  );
};
