import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import store from "./redux";
import { BrowserRouter as Router , useRouteMatch } from "react-router-dom";
import { Provider } from "react-redux";
import SimpleReactLightbox from "simple-react-lightbox";
import ContainerAdmin from "./Components/Admin2/Admin"
import { loginThunk } from "./Reducers/adminReducer";

import ContainerDashboard from "./Components/Admin2/DashBoard"
import Footer from "./Components/Footer/Footer";

const onSubmit = (formData) => {
  console.log("submit")
  loginThunk(formData)
}

function renderComp() {
  if(window.location.pathname === "/admin"){
  return <ContainerAdmin onSubmit = {onSubmit}/>
}
return <App /> 

}

ReactDOM.render(
    <Router>
      <Provider store={store}>
        <SimpleReactLightbox>
         { renderComp() }
         <Footer />
        </SimpleReactLightbox>
      </Provider>
    </Router>,
  document.getElementById("root")
);


