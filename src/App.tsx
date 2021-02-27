import React, { ReactElement, useState } from "react";
import { Header, Footer, Game, AboutGame, Score, Settings, MAIN_MUSIC, SOUND, BRICK, PLAYER } from "./components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LangContext, languarges } from "./components/index";
import "./App.scss";

const App = (): ReactElement => {
  const [lang, setLang] = useState("en");
  const [musicVolume, setMusicVolume] = useState(false);
  const [soundVolume, setSoundVolume] = useState(false);
  const [valueMusic, setValueMusic] = useState(50);
  const [valueSound, setValueSound] = useState(50);
  const [colorBrick, setColorBrick] = useState(BRICK.colors);
  const [colorChange, setColorChange] = useState(false);

  MAIN_MUSIC.play();
  MAIN_MUSIC.autoplay = true;
  MAIN_MUSIC.loop = true;

  const handleLang = (e: any) => {
    return e.target.id === "LangEN" ? setLang("en") : setLang("ru");
  };

  const handleMusic = (e: any) => {
    if (e.target.id === "MusicBtn") {
      setMusicVolume(!musicVolume);
      return !musicVolume === false ? (MAIN_MUSIC.volume = valueMusic / 100) : (MAIN_MUSIC.volume = 0);
    } else {
      setSoundVolume(!soundVolume);
      return !soundVolume === false ? (SOUND.volume = valueSound / 100) : (SOUND.volume = 0);
    }
  };

  const handleMusicChange = (e: any) => {
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

  return (
    <LangContext.Provider value={languarges[lang]}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="app-wrapper-content">
            {/* <Switch> */}
            <Redirect exact to="/" />
            <Route exact path="/" component={AboutGame} />
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
            {/* </Switch> */}
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LangContext.Provider>
  );
};

export default App;
