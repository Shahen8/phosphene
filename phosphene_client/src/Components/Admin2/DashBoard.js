import React from "react";
import { Field, reduxForm } from "redux-form";
import { fieldProto } from "./Admin";
import { required } from "../../Validation/validation";
import styles from "./Admin.module.css"

const Dashboard = (props) => {
  return (
    <div>
      <form onSubmit = {props.handleSubmit}>
          <div className = {styles.inputArea}>
        <Field name="URL" placeholder="URL of image" type="text" component={fieldProto} warn={required} />
        <Field name="desc" placeholder="Description" type="text" component={fieldProto} warn={required} />
        </div>
        <div className = {styles.submitArea}>
        <button type ="submit"  className = "btn btn-info">New Earring</button>
        <button type ="submit" className = "btn btn-info">New Pendant</button>
        <button type ="submit" className = "btn btn-info">New Brooche</button>
        </div>
      </form>
    </div>
  );
};

const ContainerDashboard = reduxForm({ form: "dashboard" }) (Dashboard)

export default ContainerDashboard
