import React from "react";
import { Field, reduxForm } from "redux-form";
import { inputProto, radioProto } from "../ReduxForm/components";
import { required } from "../../Validation/validation";
import styles from "./Admin.module.css";

const Dashboard = (props) => {
  return (
    <div className = {styles.main}>
      <button className="btn btn-dark" onClick={props.logOut}>
        Log Out
      </button>
      <form className = {styles.dashForm} onSubmit={props.handleSubmit}>
        <div>
          <Field
            validate={required}
            name="URL"
            placeholder="URL of image"
            type="text"
            component={inputProto}
            warn={required}
          />
          <Field
            validate={required}
            name="desc"
            placeholder="Description"
            type="text"
            component={inputProto}
            warn={required}
          />
          <div className = {styles.radioInput} >
            <label >
              <Field
                name="item"
                component={radioProto}
                type="radio"
                value="earring"
              />{" "}
              Earring
            </label>
            <label>
              <Field
                name="item"
                component={radioProto}
                type="radio"
                value="brooche"
              />{" "}
              Brooche
            </label>
            <label>
              <Field
                name="item"
                component={radioProto}
                type="radio"
                value="pendant"
              />{" "}
              Pendant
            </label>
          </div>
        </div>
        <button  className="btn btn-info">
            Add
          </button>
      </form>
    </div>
  );
};

const ContainerDashboard = reduxForm({ form: "dashboard" })(Dashboard);

export default ContainerDashboard;
