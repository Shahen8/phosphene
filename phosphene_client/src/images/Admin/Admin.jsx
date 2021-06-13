import React from "react";
import styles from "./Admin.module.css";
import { useState, useEffect } from "react";

function Admin(props) {
  debugger;
  const [url, setUrl] = useState(props.state.admin.urlValue);
  const [desc, setDesc] = useState(props.state.admin.descValue);
  useEffect(() => {
    props.urlChange(url);
  }, [url]);
  useEffect(() => {
    debugger;
    props.descChange(desc);
  }, [desc]);
  debugger;
  return (
    <div className={styles.container}>
      <div className={styles.shopBtn}>
        <a type="button" href="/shop/brooches" className="btn btn-info">
          {" "}
          Brooches
        </a>
        <a type="button" href="/shop/pendants" className="btn btn-info">
          {" "}
          Pendants
        </a>
        <a type="button" href="/shop/earrings" className="btn btn-info">
          {" "}
          Earrings
        </a>
      </div>
      <div className={styles.main}>
        <div className={styles.inputArea}>
          <input
            onChange={(e) => {
              debugger;
              setUrl(e.target.value);
            }}
            value={url}
            placeholder = "URL or local path of image"
          ></input>
          <input
            onChange={(e) => {
              debugger;
              setDesc(e.target.value);
            }}
            value={desc}
            placeholder = "Description"
          ></input>
        </div>
        <div className={styles.shopBtn}>
          <button className="btn btn-success"> New Brooche</button>
          <button className="btn btn-success"> New Pendant</button>
          <button className="btn btn-success"> New Earring</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
