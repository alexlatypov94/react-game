import React, { ReactElement, useState } from "react";
import { Header, Footer, Game, AboutGame, Score, Settings, MUSIC } from "./components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LangContext, languarges } from "./components/index";
import "./App.scss";

const App = (): ReactElement => {
  const [lang, setLang] = useState("en");
  const [musicVolume, setMusicVolume] = useState(false);
  const [soundVolume, setSoundVolume] = useState(false);

  const mainMusic: any = new Audio(MUSIC.snoop.ref);
  mainMusic.play();
  mainMusic.volume = MUSIC.snoop.volume;
  mainMusic.loop = true;
  mainMusic.autoplay = true;

  console.log(mainMusic);

  const handleLang = (e: any) => {
    return e.target.id === "LangEN" ? setLang("en") : setLang("ru");
  };

  const handleMusic = (e: any) => {
    setMusicVolume(!musicVolume);
    return musicVolume === false ? MUSIC.snoop.volume : (MUSIC.snoop.volume = 0);
  };

  return (
    <LangContext.Provider value={languarges[lang]}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="app-wrapper-content">
            <Switch>
              {/* <Redirect exact to="/" /> */}
              <Route exact path="/" component={AboutGame} />
              <Route path="/game" component={Game} />
              <Route path="/score" component={Score} />
              <Route
                path="/settings"
                render={() => <Settings onLangChange={handleLang} onHandleMusic={handleMusic} />}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LangContext.Provider>
  );
};

export default App;
