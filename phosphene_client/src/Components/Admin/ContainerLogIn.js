import { connect } from "react-redux";
import { userChangethunk, passChangethunk, loginThunk } from "../../Reducers/adminReducer";
import LogIn from "./LogIn";

let mapStateToProps = (state) => {
  return { state };
};

const ContainerLogIn = connect(mapStateToProps, {
  userChange: (value) => userChangethunk(value),
  passChange: (value) => passChangethunk(value),
  login : (adminData) => loginThunk(adminData)
})(LogIn);

export default ContainerLogIn
