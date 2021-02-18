import React, { ReactElement } from "react";
import { Header, Footer, StartMenu, Game } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

const App = (): ReactElement => {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" component={StartMenu} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
