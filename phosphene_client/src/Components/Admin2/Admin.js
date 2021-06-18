import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { minLength, required } from "../../Validation/validation";
import styles from "./Admin.module.css";
import DashBoard from "./DashBoard";

export const fieldProto = ({
  input,
  placeholder,
  type,
  meta: { touched, warning },
}) => {
  return (
    <div className={styles.inputField}>
      <input {...input} placeholder={placeholder} type={type}></input>
      {touched ? <span>{warning}</span> : undefined}
    </div>
  );
};


const LoginForm = (props) => {
  return (
    <form className = {styles.loginMain} onSubmit={props.handleSubmit}>
      <h4>Sign In to Continue</h4>
      <Field
        validate={required}
        name="login"
        placeholder="Username"
        component={fieldProto}
        warn={required}
      />
      <Field
        validate={(required, minLength)}
        type="password"
        name="password"
        component={fieldProto}
        placeholder="Password"
        warn={minLength}
      />
      <button className="btn btn-success">Sign In</button>
    </form>
  ); 
};

const ReduxLogin = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  

  const [auth, setAuth] = useState(props.state.auth.auth);

  useEffect ( () => {
    props.authMe(sessionStorage.getItem("token"))
  } , [auth])

  useEffect ( () => {
    setAuth(props.state.auth.auth)
  } , [props.state.auth.current])

  function onSubmit(adminData) {
    props.onSubmit(adminData)
  }
  debugger;

  return (
    <div className = {styles.container}>{auth ? <DashBoard /> : <ReduxLogin onSubmit={onSubmit} />}</div>
  );
};

export default Login;
