import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import store from "./redux";
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import SimpleReactLightbox from "simple-react-lightbox";

import ContainerDashboard from "./Components/Admin2/DashBoard"
import Footer from "./Components/Footer/Footer";




ReactDOM.render(
    <Router>
      <Provider store={store}>
        <SimpleReactLightbox>
         <App />
         <Footer />
        </SimpleReactLightbox>
      </Provider>
    </Router>,
  document.getElementById("root")
);


