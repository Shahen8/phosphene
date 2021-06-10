import { connect } from "react-redux";
import { descChangethunk, urlChangethunk } from "../../Reducers/adminReducer";
import Admin from "./Admin";

let mapStateToProps = (state) => {
  return { state };
};

const ContainerAdmin = connect(mapStateToProps, {
  urlChange: (value) => urlChangethunk(value),
  descChange: (value) => descChangethunk(value)
})(Admin);

export default ContainerAdmin;
