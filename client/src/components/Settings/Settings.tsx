import React, { ReactElement, useContext, useState } from "react";
import { BALL, BRICK, SOUND_MUSIC_IMG } from "../core";
import { LangContext } from "../util";
import "./Settings.scss";

export const Settings = (props: any): ReactElement => {
  const lang: any = useContext(LangContext);
  const [activeSpeed, setActiveSpeed] = useState(false);

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange(e);
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onHandleMusic(e);
  };

  const handleLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onLangChange(e);
  };

  const handleBtnColor = (e: any) => {
    props.onChangeBrickColor(e);
  };

  const handleBallSpeed = (e: any) => {
    BALL.speed = Number(e.target.value);
    setActiveSpeed(!activeSpeed);
  };

  return (
    <div className="settings-wrapper">
      <div className="setting-music-wrapper">
        <label htmlFor="music">{lang === "en" ? "Music" : "Музыка"}</label>
        <input type="range" min="0" max="100" value={props.valueMusic} id="music" onChange={handleValue} />
      </div>
      <div className="setting-music-wrapper">
        <label htmlFor="Sound">{lang === "en" ? "Sound" : "Звуки"}</label>
        <input type="range" min="0" max="100" value={props.valueSound} id="Sound" onChange={handleValue} />
      </div>
      <div className="setting-music-wrapper music-checkbox">
        <span>{lang === "en" ? "Music on" : "Музыка вкл"}</span>
        <button className="btn-config btn-music" id="MusicBtn" onClick={handleButton}>
          <object
            data={props.music === false ? SOUND_MUSIC_IMG.musicOn : SOUND_MUSIC_IMG.musicOff}
            type="image/svg+xml"
          ></object>
        </button>
        <span>{lang === "en" ? "Sounds on" : "Звуки вкл"}</span>
        <button className="btn-config btn-sound" id="SoundBtn" onClick={handleButton}>
          <object
            data={props.sound === false ? SOUND_MUSIC_IMG.soundOn : SOUND_MUSIC_IMG.soundOff}
            type="image/svg+xml"
          ></object>
        </button>
      </div>
      <div className="lang-settings">
        <form>
          <div className="lang-wrapper">
            <label htmlFor="LangEN">EN</label>
            <input
              type="radio"
              id="LangEN"
              name="choose-lang"
              onChange={handleLang}
              checked={lang === "en" ? true : false}
            />
          </div>
          <div className="lang-wrapper">
            <label htmlFor="LangRu">RU</label>
            <input type="radio" id="LangRu" name="choose-lang" onChange={handleLang} />
          </div>
        </form>
      </div>
      <div className="brick-color-settings">
        <h1>{lang === "en" ? "Bricks color" : "Цвет кирпича"}</h1>
        <div className="brick-color-wrapper">
          <button
            className={BRICK.colors === ("#0019fc" || "blue") ? "brick-color blue current-color" : "brick-color blue"}
            value="#0019fc"
            onClick={handleBtnColor}
          ></button>
          <button
            className={BRICK.colors === "#fc0000" ? "brick-color red current-color" : "brick-color red"}
            value="#fc0000"
            onClick={handleBtnColor}
          ></button>
          <button
            className={BRICK.colors === "#08fc00" ? "brick-color green current-color" : "brick-color green"}
            value="#08fc00"
            onClick={handleBtnColor}
          ></button>
          <button
            className={BRICK.colors === "#f8fc00" ? "brick-color yellow current-color" : "brick-color yellow"}
            value="#f8fc00"
            onClick={handleBtnColor}
          ></button>
          <button
            className={BRICK.colors === "#e700fc" ? "brick-color purple current-color" : "brick-color purple"}
            value="#e700fc"
            onClick={handleBtnColor}
          ></button>
          <button
            className={BRICK.colors === "#fc6500" ? "brick-color orange current-color" : "brick-color orange"}
            value="#fc6500"
            onClick={handleBtnColor}
          ></button>
        </div>
      </div>
      <div className="ball-speed-wrapper">
        <h1>{lang === "en" ? "Ball speed" : "Скорость шара"}</h1>
        <div className="ball-speed-btns">
          <button
            className={BALL.speed === 5 ? "ball-speed low ball-speed-active" : "ball-speed low"}
            value="5"
            onClick={handleBallSpeed}
          >
            {lang === "en" ? "Low speed" : "Низкая скорость"}
          </button>
          <button
            className={BALL.speed === 10 ? "ball-speed medium ball-speed-active" : "ball-speed medium"}
            value="10"
            onClick={handleBallSpeed}
          >
            {lang === "en" ? "Medium speed" : "Средняя скорость"}
          </button>
          <button
            className={BALL.speed === 15 ? "ball-speed high ball-speed-active" : "ball-speed high"}
            value="15"
            onClick={handleBallSpeed}
          >
            {lang === "en" ? "High speed" : "Высокая скорость"}
          </button>
        </div>
      </div>
    </div>
  );
};
