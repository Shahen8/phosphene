import React from "react";
import { connect } from "react-redux";
import Login from "./Admin";
import { loginThunk , authMeThunk } from "../../Reducers/authReducer";

const mapStateToProps = (state) => {
  return {state}
}
const ContainerLogin = connect(mapStateToProps, {
  authMe : (token) => authMeThunk(token),
  onSubmit: (formData) => loginThunk(formData)
  })(Login);

export default ContainerLogin;
