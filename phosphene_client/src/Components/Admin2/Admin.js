import React from "react";
import { Field, reduxForm } from "redux-form";
import { minLength, required } from "../../Validation/validation";
import styles from "./Admin.module.css"




export const fieldProto = ({input,placeholder,type,meta:{touched,warning}}) => {
    return(
        <div className = {styles.input}>
            <input {...input} placeholder={placeholder}type = {type}></input>
            {touched ? <span>{warning}</span> : undefined }
        </div>
    )
}

const Login = (props) => {
  debugger;
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field validate={required} name="login" placeholder = "Username" component={fieldProto} warn= {required} />
        <Field
          validate={(required, minLength)}
          type="password"
          name="password"
          component={fieldProto}
          placeholder = "Password"
          warn = {minLength}
        />

        <button className="btn btn-success">Sign In</button>
      </form>
    </div>
  );
};

const ContainerAdmin = reduxForm({ form: "login" })(Login);

export default ContainerAdmin;
