import { connect } from "react-redux";
import { userChangethunk, passChangethunk } from "../../Reducers/adminReducer";
import LogIn from "./LogIn";

let mapStateToProps = (state) => {
  return { state };
};

const ContainerLogIn = connect(mapStateToProps, {
  userChange: (value) => userChangethunk(value),
  passChange: (value) => passChangethunk(value)
})(LogIn);

export default ContainerLogIn
