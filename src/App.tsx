import React, { ReactElement } from "react";
import { Header, Footer, Game, AboutGame, Score, Settings } from "./components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app-wrapper-content">
          <Switch>
            {/* <Redirect exact to="/" /> */}
            <Route exact path="/" component={AboutGame} />
            <Route path="/game" component={Game} />
            <Route path="/score" component={Score} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
