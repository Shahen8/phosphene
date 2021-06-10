import React from "react";
import NavMenu from "./Components/NavMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.css"
import ContainerShop from "./Components/Shop/ContainerShop";
import ContainerHome from "./Components/Home/ContainerHome";
import { Switch, Route } from "react-router-dom";



export function App(props) {
  return (
    <div className = {styles.container}>
      <NavMenu />

      <Switch>
        <Route exact path="/" render={() => <ContainerHome />}></Route>
        <Route path="/home" render={() => <ContainerHome />}></Route>
        <Route
          path="/shop/:collection"
          render={() => <ContainerShop />}
        ></Route>
  
      </Switch>
     
    </div>
  );
}
