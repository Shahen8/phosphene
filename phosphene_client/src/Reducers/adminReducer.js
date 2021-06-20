import * as axios from "axios";

const AUTH = "AUTH";

const authAC = (token, bool) => {
  return { type: AUTH, token, bool };
};

const adminDefaultState = {
  auth: false,
  current: null,
};
const adminReducer = (adminState = adminDefaultState, action) => {
  debugger;
  switch (action.type) {
    case AUTH:
      return { ...adminState, current: action.token, auth: action.bool };
    default:
      return adminState;
  }
};
export const logOut = () => dispatch => {
  console.log("out")
  dispatch(authAC(null,false))
  sessionStorage.removeItem("token")
}

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

export const addItem = (itemData) =>(dispatch) => {
  console.log(itemData);
  if(authMeThunk(sessionStorage.getItem("token"))){
  axios.post("http://localhost:8080/new/additem", itemData).then((response) => {
    switch (response.data.resCode) {
      case 1:
        alert("Item was added successfully!");
        break;
      case 2:
        alert("Item already exists!");
        break;
      default:
        alert("Something went wrong.Please try again");
    }
  })}else{
    alert("Please Sign in to continue.")
  }
};

export const authMeThunk = (token) => (dispatch) => {
  debugger;
  console.log(token);
  axios
    .get("http://localhost:8080/admin", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      if (response.data.token) {
        dispatch(authAC(sessionStorage.getItem("token"), true));
        return true
      } else {
        dispatch(authAC(null, false));
        return false
      }
    });
};

export default adminReducer;
