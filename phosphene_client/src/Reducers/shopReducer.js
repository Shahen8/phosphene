import * as axios from "axios";

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

let defaultShopData = {
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
    // {
    //   image:
    //     "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/154201352_491107485627909_279439559664355863_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_ohc=os0l1UN6KdMAX_mlZbk&_nc_ht=scontent.fevn1-4.fna&oh=54f362f793e00edd5074a4ad0ee7158c&oe=60C4535F",
    //   desc: "Ականջօղի չափը 1 սմ Արժեքը 2500 դրամ",
    //   bigImg: false,
    // },
    // {
    //   image:
    //     "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/151852790_488493825889275_1937556121742081829_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_ohc=SU3f4I1OcHcAX9ei-SV&_nc_ht=scontent.fevn1-4.fna&oh=86112dece9464950a5c4dbcb4181e7e2&oe=60C31407",
    //   desc: "-Վեցանկյուն Ականջօղի արժեքը ` 2000 դրամ",
    //   bigImg: false,
    // },
    // {
    //   image:
    //     "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.6435-9/183672310_551868912885099_2659580268597697612_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=a26aad&_nc_ohc=wqWRtr_hQi0AX8_qTSj&_nc_ht=scontent.fevn1-4.fna&oh=fecd16f64ea2a94c380ae0f4b224826b&oe=60C43604",
    //   desc: "Կրծքազարդի արժեքը` 3000 դրամ",
    //   bigImg: false,
    // },
  ],
};

const shopReducer = (shopState = defaultShopData, action) => {
  switch (action.type) {
    case PENDANTS:
      return { shopData: action.data };

    case BROOCHES:
      return { shopData: action.data };

    case EARINGS:
      return { shopData: action.data };

    default:
      return shopState;
  }
};

export default shopReducer;

export const getEarringsThunk = () => {
  debugger;
  return (dispatch) => {
    axios.get("/api/getEarrings").then((response) => {
      dispatch(loadEarringsAC(response));
    });
  };
};

export const getPendantsThunk = () => {
  debugger;
  return (dispatch) => {
    axios
      .get("/api/getPendants")
      .then((response) => dispatch(loadPendantsAC(response)));
  };
};

export const getBroochesThunk = () => {
  debugger;
  return (dispatch) => {
    axios
      .get("/api/getBrooches")
      .then((response) => dispatch(loadBroochesAC(response)));
  };
};
