import { connect } from "react-redux";
import Home from "../Home/Home";


let mapStateToProps = (state) => {
 return {state} 
}
let mapDispatchToProps = () => {
};

const ContainerHome = connect(mapStateToProps,mapDispatchToProps)(Home);

export default ContainerHome;
