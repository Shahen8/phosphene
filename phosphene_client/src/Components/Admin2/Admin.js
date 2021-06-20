import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { minLength, required } from "../../Validation/validation";
import styles from "./Admin.module.css";
import DashBoard from "./DashBoard";
import { inputProto } from "../ReduxForm/components";


const LoginForm = (props) => {
  return (
    <form className = {styles.loginMain} onSubmit={props.handleSubmit}>
      <h4>Sign In to Continue</h4>
      <Field
        validate={required}
        name="login"
        placeholder="Username"
        component={inputProto}
        warn={required}
      />
      <Field
        validate={(required, minLength)}
        type="password"
        name="password"
        component={inputProto}
        placeholder="Password"
        warn={minLength}
      />
      <button className="btn btn-success">Sign In</button>
    </form>
  ); 
};

const ReduxLogin = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  

  const [auth, setAuth] = useState(props.state.admin.auth);

  useEffect ( () => {
    props.authMe(sessionStorage.getItem("token"))
  } , [auth])

  useEffect ( () => {
    setAuth(props.state.admin.auth)
  } , [props.state.admin.current])

  function onSubmit(adminData) {
    props.onSubmit(adminData)
  }
  function onSubmitDash(data){
   
    props.addItem(data)
  }

 
  debugger;

  return (
    <div className = {styles.container}>{auth ? <DashBoard logOut = {props.logOut} onSubmit = {onSubmitDash}/> : <ReduxLogin onSubmit={onSubmit} />}</div>
  );
};

export default Login;
