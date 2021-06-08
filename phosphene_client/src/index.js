import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import store from "./redux";
import { BrowserRouter as Router  } from "react-router-dom";
import { Provider } from "react-redux";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


