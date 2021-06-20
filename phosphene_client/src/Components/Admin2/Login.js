import React from "react";
import { connect } from "react-redux";
import Login from "./Admin";
import { loginThunk , authMeThunk , addItem , logOut } from "../../Reducers/adminReducer";

const mapStateToProps = (state) => {
  return {state}
}
const ContainerLogin = connect(mapStateToProps, {
  authMe : (token) => authMeThunk(token),
  onSubmit: (formData) => loginThunk(formData),
  addItem : (itemData) => addItem(itemData),
  logOut : () => logOut()
  })(Login);

export default ContainerLogin;
