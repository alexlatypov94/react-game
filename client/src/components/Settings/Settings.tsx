import React, { ReactElement, useContext, useState } from "react";
import { BALL, SOUND_MUSIC_IMG } from "../core";
import { LangContext } from "../util";
import "./Settings.scss";

export const Settings = (props: any): ReactElement => {
  const lang: any = useContext(LangContext);

  const handleValue = (e: any) => {
    props.handleChange(e);
  };

  const handleButton = (e: any) => {
    props.onHandleMusic(e);
  };

  const handleLang = (e: any) => {
    props.onLangChange(e);
  };

  const handleBtnColor = (e: any) => {
    props.onChangeBrickColor(e);
  };

  const handleBallSpeed = (e: any) => {
    BALL.speed = e.target.value;
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
          <button className="brick-color blue" value="#0019fc" onClick={handleBtnColor}></button>
          <button className="brick-color red" value="#fc0000" onClick={handleBtnColor}></button>
          <button className="brick-color green" value="#08fc00" onClick={handleBtnColor}></button>
          <button className="brick-color yellow" value="#f8fc00" onClick={handleBtnColor}></button>
          <button className="brick-color purple" value="#e700fc" onClick={handleBtnColor}></button>
          <button className="brick-color orange" value="#fc6500" onClick={handleBtnColor}></button>
        </div>
      </div>
      <div className="ball-speed-wrapper">
        <h1>{lang === "en" ? "Ball speed" : "Скорость шара"}</h1>
        <div className="ball-speed-btns">
          <button className="ball-speed low" value="5" onClick={handleBallSpeed}>
            {lang === "en" ? "Low speed" : "Низкая скорость"}
          </button>
          <button className="ball-speed medium" value="10" onClick={handleBallSpeed}>
            {lang === "en" ? "Medium speed" : "Средняя скорость"}
          </button>
          <button className="ball-speed high" value="15" onClick={handleBallSpeed}>
            {lang === "en" ? "High speed" : "Высокая скорость"}
          </button>
        </div>
      </div>
    </div>
  );
};
