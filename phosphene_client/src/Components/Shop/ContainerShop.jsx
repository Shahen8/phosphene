import { connect } from "react-redux";
import Shop from "./Shop";
import {
  getBroochesThunk,
  getEarringsThunk,
  getPendantsThunk,
} from "../.././Reducers/shopReducer";

let mapStateToProps = (state) => {
  return { state };
};

// let mapDispatchToProps = () => {
//   return {
//     pendants: () => getPendantsThunk(),
//     brooches: () => getBroochesThunk(),
//     earrings: () => getEarringsThunk(),
//   };
// };

const ContainerShop = connect(mapStateToProps, {
  pendants: () => getPendantsThunk(),
  brooches: () => getBroochesThunk(),
  earrings: () => getEarringsThunk(),
})(Shop);

export default ContainerShop;
