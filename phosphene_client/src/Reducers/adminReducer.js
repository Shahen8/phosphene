const URL_CHANGE = "URL_CHANGE";
const DESC_CHANGE = "DESC_CHANGE";
const USER_NAME_CHANGE = "USER_NAME_CHANGE";
const PASS_CHANGE = "PASS_CHANGE";

const userChangeAC = (value) => {
  return { type: USER_NAME_CHANGE, value };
};

const passChangeAC = (value) => {
  return { type: PASS_CHANGE, value };
};

const descChangeAC = (value) => {
  return { type: DESC_CHANGE, value };
};

const urlChangeAC = (value) => {
  return { type: URL_CHANGE, value };
};

const adminDefaultState = {
  auth: true,
  urlValue: "",
  descValue: "",
  userValue: "",
  passValue: ""
};
const adminReducer = (adminState = adminDefaultState, action) => {
  debugger;
  switch (action.type) {
    case URL_CHANGE:
      return { adminState, urlValue: action.value };
    case DESC_CHANGE:
      return { adminState, descValue: action.value };
      case USER_NAME_CHANGE:
      return { adminState, userValue: action.value };
      case PASS_CHANGE:
      return { adminState, passValue: action.value };
    default:
      return adminState;
  }
};

export const urlChangethunk = (value) => {
  return (dispatch) => {
    dispatch(urlChangeAC(value));
  };
};

export const descChangethunk = (value) => {
  return (dispatch) => {
    dispatch(descChangeAC(value));
  };
};

export const passChangethunk = (value) => {
  return (dispatch) => {
    dispatch(passChangeAC(value));
  };
};

export const userChangethunk = (value) => {
  return (dispatch) => {
    dispatch(userChangeAC(value));
  };
};

export const postBrooche = () =>{

}

export const postPendant = () => {
  
}

export const postEarring = () => {
  
}

export default adminReducer;
