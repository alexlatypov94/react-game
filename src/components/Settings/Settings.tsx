import React, { ReactElement, useState } from "react";
import { SOUND_MUSIC_IMG } from "../core";
import "./Settings.scss";

export const Settings = (): ReactElement => {
  const [valueMusic, setValueMusic] = useState(50);
  const [valueSound, setValueSound] = useState(50);
  const [checkMusicBtn, setCheckMusicBtn] = useState(false);
  const [checkSoundBtn, setCheckSoundBtn] = useState(false);

  function handleValue(e: any) {
    if (e.target.id === "music") {
      setValueMusic(e.target.value);
    } else {
      setValueSound(e.target.value);
    }
  }

  function handleButton(e: any) {
    if (e.target.id === "MusicBtn") {
      setCheckMusicBtn(!checkMusicBtn);
    } else {
      setCheckSoundBtn(!checkSoundBtn);
    }
  }

  return (
    <div className="settings-wrapper">
      <div className="setting-music-wrapper">
        <label htmlFor="music">Music</label>
        <input type="range" min="1" max="100" value={valueMusic} id="music" onChange={handleValue} />
      </div>
      <div className="setting-music-wrapper">
        <label htmlFor="Sound">Sound</label>
        <input type="range" min="1" max="100" value={valueSound} id="Sound" onChange={handleValue} />
      </div>
      <div className="setting-music-wrapper music-checkbox">
        <span>Music on</span>
        <button className="btn-config btn-music" id="MusicBtn" onClick={(e) => handleButton(e)}>
          <object
            data={checkMusicBtn === false ? SOUND_MUSIC_IMG.musicOn : SOUND_MUSIC_IMG.musicOff}
            type="image/svg+xml"
          ></object>
        </button>
        <span>Sound on</span>
        <button className="btn-config btn-sound" id="SoundBtn" onClick={handleButton}>
          <object
            data={checkSoundBtn === false ? SOUND_MUSIC_IMG.soundOn : SOUND_MUSIC_IMG.soundOff}
            type="image/svg+xml"
          ></object>
        </button>
      </div>
      <div className="field-settings"></div>
    </div>
  );
};
