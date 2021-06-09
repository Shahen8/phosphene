import { connect } from "react-redux";
import Home from "../Home/Home";


let mapStateToProps = (state) => {
 return {state} 
}
const ContainerHome = connect(mapStateToProps)(Home);

export default ContainerHome;
