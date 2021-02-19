import React, { ReactElement } from "react";
import "./Settings.scss";

export const Settings = (): ReactElement => {
  return (
    <div className="settings-wrapper">
      <div className="setting-music-wrapper">
        <label htmlFor="music">Music</label>
        <input type="range" min="1" max="100" id="music" />
      </div>
      <div className="setting-music-wrapper">
        <label htmlFor="Sound">Suond</label>
        <input type="range" min="1" max="100" id="Sound" />
      </div>
      <div className="setting-music-wrapper music-checkbox">
        <label htmlFor="musicCheck">Music Off</label>
        <input type="checkbox" id="musicCheck" />
        <label htmlFor="soundCheck">Sound Off</label>
        <input type="checkbox" id="soundCheck" />
      </div>
    </div>
  );
};
