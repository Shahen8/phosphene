import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import store from "./redux";
import { BrowserRouter as Router , useRouteMatch } from "react-router-dom";
import { Provider } from "react-redux";
import SimpleReactLightbox from "simple-react-lightbox";
import AdminHeader from "./Components/Admin/AdminHeader"
import Footer from "./Components/Footer/Footer";

function renderComp() {
  console.log(window.location.pathname)
  if(window.location.pathname === "/admin"){
  return <AdminHeader state = {store.getState()}/>
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


