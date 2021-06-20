import * as axios from "axios";

const IS_FETCHING = "IS_FETCHING";
const PENDANTS = "PENDANTS";
const BROOCHES = "BROOCHES";
const EARINGS = "EARINGS";

const loadPendantsAC = (data) => {
  return { type: PENDANTS, data };
};

const loadBroochesAC = (data) => {
  return { type: BROOCHES, data };
};

const loadEarringsAC = (data) => {
  return { type: EARINGS, data };
};

const isFetchingAC = (value) => {
  return { type: IS_FETCHING, value };
};

let defaultShopData = {
  isFetching: true,
  shopData: [
    // {
    //   image:
    //     "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/182102320_546499850088672_7522202900137631407_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_ohc=7-kYn8ytKrgAX-Y-zVG&_nc_ht=scontent.fevn1-4.fna&oh=5f1be2b344ea31aa05185b3c99bfecca&oe=60C27811",
    //   desc: `
    //   Գտնված երազ💫   Կրծքազարդի արժեքը 3000 դրամ`,
    //   bigImg: false,
    // },
    // {
    //   image:
    //     "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/169146053_527288008676523_8606798559730316808_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=a26aad&_nc_ohc=spW3KT6aLKYAX_CSDF2&_nc_ht=scontent.fevn1-4.fna&oh=4134442536277e5c42d0eb53488914f3&oe=60C37A59",
    //   desc: "Կրծքազարդի արժեքը` 3000 դրամ",
    //   bigImg: false,
    // },
    // ,
  ],
};

const shopReducer = (shopState = defaultShopData, action) => {
  switch (action.type) {
    case PENDANTS:
      return { ...shopState, shopData: action.data };

    case BROOCHES:
      return { ...shopState, shopData: action.data };

    case EARINGS:
      return { ...shopState, shopData: action.data };

    case IS_FETCHING:
      return { ...shopState, isFetching: action.value };

    default:
      return shopState;
  }
};

export default shopReducer;

export const getEarringsThunk = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/api/getEarrings")
      .then((response) => dispatch(loadEarringsAC(response.data)))
      .then(dispatch(isFetchingAC(false)));
  };
};

export const getPendantsThunk = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/api/getPendants")
      .then((response) => dispatch(loadPendantsAC(response.data)))
      .then(dispatch(isFetchingAC(false)));
  };
};

export const getBroochesThunk = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/api/getBrooches")
      .then((response) => dispatch(loadBroochesAC(response.data)))
      .then(dispatch(isFetchingAC(false)));
  };
};
