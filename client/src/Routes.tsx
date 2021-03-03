import React, { ReactElement, useState } from "react";
import { Header, Footer, Game, AboutGame, Score, Settings, MAIN_MUSIC, SOUND, BRICK, AuthPage } from "./components";
import { Route, Switch, Redirect } from "react-router-dom";
import { LangContext, languarges } from "./components/index";
import "./App.scss";

export const useRoutes = (isAutenticated: boolean): ReactElement => {
  const [lang, setLang] = useState("en");
  const [musicVolume, setMusicVolume] = useState(false);
  const [soundVolume, setSoundVolume] = useState(false);
  const [valueMusic, setValueMusic] = useState(100);
  const [valueSound, setValueSound] = useState(100);
  const [colorBrick, setColorBrick] = useState(BRICK.colors);
  const [colorChange, setColorChange] = useState(false);

  const [missAuth, setMissAuth] = useState(false);

  window.addEventListener("mousemove", () => {
    MAIN_MUSIC.play();
  });

  MAIN_MUSIC.loop = true;

  const handleLang = (e) => {
    return e.target.id === "LangEN" ? setLang("en") : setLang("ru");
  };

  const handleMusic = (e) => {
    if (e.target.id === "MusicBtn") {
      setMusicVolume(!musicVolume);
      return !musicVolume === false ? (MAIN_MUSIC.volume = valueMusic / 100) : (MAIN_MUSIC.volume = 0);
    } else {
      setSoundVolume(!soundVolume);
      return !soundVolume === false ? (SOUND.volume = valueSound / 100) : (SOUND.volume = 0);
    }
  };

  const handleMusicChange = (e) => {
    if (e.target.id === "music") {
      setValueMusic(parseInt(e.target.value, 10));
      MAIN_MUSIC.volume = valueMusic / 100;
      if (parseInt(e.target.value, 10) <= 2) {
        MAIN_MUSIC.volume = 0;
        setMusicVolume(true);
      } else {
        setMusicVolume(false);
      }
    } else {
      setValueSound(parseInt(e.target.value, 10));
      SOUND.volume = valueSound / 100;
      if (parseInt(e.target.value, 10) <= 2) {
        SOUND.volume = 0;
        setSoundVolume(true);
      } else {
        setSoundVolume(false);
      }
    }
  };

  const handleChangeColor = (e) => {
    setColorBrick((BRICK.colors = e.target.value));
    setColorChange(true);
  };

  const handlerMissAuth = () => {
    setMissAuth(true);
  };

  if (isAutenticated || missAuth) {
    return (
      <LangContext.Provider value={languarges[lang]}>
        <div className="app">
          <Header />
          <div className="app-wrapper-content">
            <Redirect exact to="/about-game" />
            <Switch>
              <Route exact path="/about-game" component={AboutGame} />
              <Route path="/game" render={() => <Game colorChange={colorChange} newColor={colorBrick} />} />
              <Route path="/score" component={Score} />
              <Route
                path="/settings"
                render={() => (
                  <Settings
                    onLangChange={handleLang}
                    onHandleMusic={handleMusic}
                    sound={soundVolume}
                    music={musicVolume}
                    valueSound={valueSound}
                    valueMusic={valueMusic}
                    handleChange={handleMusicChange}
                    onChangeBrickColor={handleChangeColor}
                  />
                )}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </LangContext.Provider>
    );
  }

  return (
    <Switch>
      <Route exact path="/">
        <AuthPage missFunc={handlerMissAuth} />
      </Route>
      <Redirect exact to="/" />
    </Switch>
  );
};
