import React, { useState, useEffect } from "react";
import styles from "./Admin.module.css";

function LogIn(props) {
  const [userName, setUserName] = useState(props.state.admin.userValue);
  const [pass, setPass] = useState(props.state.admin.passValue);
  useEffect(() => {
    props.userChange(userName);
  }, [userName]);
  useEffect(() => {
    debugger;
    props.passChange(pass);
  }, [pass]);
  return (
    <div className={styles.container}>
      <div className={styles.loginMain}>
        <h4>Sign In to Continue</h4>
        <input
          onChange={(e) => {
            debugger;
            setUserName(e.target.value);
          }}
          value={userName}
          placeholder="username"
        ></input>
        <input
          onChange={(e) => {
            debugger;
            setPass(e.target.value);
          }}
          value={pass}
          type="password"
          placeholder="password"
        ></input>
        <button className="btn btn-success">Sign In</button>
      </div>
    </div>
  );
}

export default LogIn;
