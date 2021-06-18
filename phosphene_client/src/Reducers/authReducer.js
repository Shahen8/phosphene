import * as axios from "axios";

const AUTH = "AUTH";

const authAC = (token, bool) => {
  return { type: AUTH, token, bool };
};

const authDefaultState = {
  auth: false,
  current: null,
};
const authReducer = (authState = authDefaultState, action) => {
  debugger;
  switch (action.type) {
    case AUTH:
      return { ...authState, current: action.token, auth: action.bool };
    default:
      return authState;
  }
};

export const loginThunk = (adminData) => (dispatch) => {
  debugger;
  console.log(adminData);
  axios
    .post("http://localhost:8080/admin/login/", adminData)
    .then((response) => {
      if (response.data.resCode === 1) {
        sessionStorage.token = response.data.token;
        dispatch(authAC(response.data.token, true));
      } else {
        alert(response.data.message);
      }
    });
};

export const authMeThunk = (token) => (dispatch) => {
  debugger;
  console.log(token);
  axios.get("http://localhost:8080/admin", {
    headers: {
      authorization: "Bearer " + token, 
    },
  }).then((response) => {
    if(response.data.token){
      dispatch(authAC(sessionStorage.getItem("token") , true))
    }else{
      dispatch(authAC(null , false))
    }
  });
};

export default authReducer;
