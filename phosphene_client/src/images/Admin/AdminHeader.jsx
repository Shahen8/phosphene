import React , {useState} from "react";
import styles from "./Admin.module.css";
import logo from "../../images/logo2.png";
import ContainerAdmin from "./ContainerAdmin"
import ContainerLogIn from "./ContainerLogIn"

function AdminHeader(props) {
  debugger;
  const [auth , setAuth] = useState(props.state.admin.auth)
  return (
    <div>
    <div className={styles.logo}>
      <a href="/home">
        <img src={logo} alt="logo" width="380" height="100" />
      </a>
      {auth ? <button className="btn btn-dark">Log Out</button> : null}
    </div>
    {auth ? <ContainerAdmin /> : <ContainerLogIn />}
    </div>

  );
}

export default AdminHeader;
