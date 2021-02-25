import React, { ReactElement, useContext, useState } from "react";
import { SOUND_MUSIC_IMG } from "../core";
import { LangContext } from "../util";
import "./Settings.scss";

export const Settings = (props: any): ReactElement => {
  const [valueMusic, setValueMusic] = useState(50);
  const [valueSound, setValueSound] = useState(50);
  const [checkMusicBtn, setCheckMusicBtn] = useState(false);
  const [checkSoundBtn, setCheckSoundBtn] = useState(false);

  const lang: any = useContext(LangContext);

  function handleValue(e: any): void {
    if (e.target.id === "music") {
      setValueMusic(e.target.value);
    } else {
      setValueSound(e.target.value);
    }
  }

  function handleButton(e: any): void {
    if (e.target.id === "MusicBtn") {
      setCheckMusicBtn(!checkMusicBtn);
      props.onHandleMusic(e);
    } else {
      setCheckSoundBtn(!checkSoundBtn);
      props.onHandleMusic(e);
    }
  }

  function handleLang(e: any) {
    props.onLangChange(e);
  }

  const handleBtnColor = (e) => {
    props.onChangeBrickColor(e);
  };

  return (
    <div className="settings-wrapper">
      <div className="setting-music-wrapper">
        <label htmlFor="music">{lang === "en" ? "Music" : "Музыка"}</label>
        <input type="range" min="1" max="100" value={valueMusic} id="music" onChange={handleValue} />
      </div>
      <div className="setting-music-wrapper">
        <label htmlFor="Sound">{lang === "en" ? "Sound" : "Звуки"}</label>
        <input type="range" min="1" max="100" value={valueSound} id="Sound" onChange={handleValue} />
      </div>
      <div className="setting-music-wrapper music-checkbox">
        <span>{lang === "en" ? "Music on" : "Музыка вкл"}</span>
        <button className="btn-config btn-music" id="MusicBtn" onClick={(e) => handleButton(e)}>
          <object
            data={checkMusicBtn === false ? SOUND_MUSIC_IMG.musicOn : SOUND_MUSIC_IMG.musicOff}
            type="image/svg+xml"
          ></object>
        </button>
        <span>{lang === "en" ? "Sounds on" : "Звуки вкл"}</span>
        <button className="btn-config btn-sound" id="SoundBtn" onClick={handleButton}>
          <object
            data={checkSoundBtn === false ? SOUND_MUSIC_IMG.soundOn : SOUND_MUSIC_IMG.soundOff}
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
        <button className="brick-color blue" value="#0019fc" onClick={handleBtnColor}></button>
        <button className="brick-color red" value="#fc0000" onClick={handleBtnColor}></button>
        <button className="brick-color green" value="#08fc00" onClick={handleBtnColor}></button>
        <button className="brick-color yellow" value="#f8fc00" onClick={handleBtnColor}></button>
        <button className="brick-color purple" value="#e700fc" onClick={handleBtnColor}></button>
        <button className="brick-color orange" value="#fc6500" onClick={handleBtnColor}></button>
      </div>
    </div>
  );
};
