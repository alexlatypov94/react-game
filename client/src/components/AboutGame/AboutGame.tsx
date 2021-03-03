import React, { ReactElement, useContext } from "react";
import { LangContext } from "../util";
import "./AboutGame.scss";

export const AboutGame = (): ReactElement => {
  const lang: string = useContext(LangContext);
  return (
    <div className="about-game-wrapper">
      <div className="hot-key-row">
        <span className="hot-key-description">
          {lang === "en"
            ? "Please click on the canvas board to focus on it"
            : "Пожалуйста, нажмите на канвас, чтобы он был в фокусе"}
        </span>
        <span className="hot-key">Click</span>
      </div>
      <div className="hot-key-row">
        <span className="hot-key-description">
          {lang === "en" ? "Press to launch the ball" : "Нажмите чтобы запустить шар"}
        </span>
        <span className="hot-key">
          <span className="control-btn enter">&crarr;</span>{" "}
        </span>
      </div>
      <div className="hot-key-row">
        <span className="hot-key-description">
          {lang === "en" ? "To move the platform use the" : "Для перемещения платформы используйте"}
        </span>
        <span className="hot-key">
          <span className="control-btn">&larr;</span>
          <span className="control-btn">&rarr;</span>
        </span>
      </div>
      <div className="hot-key-row">
        <span className="hot-key-description">
          {lang === "en" ? "Press for the autoplay" : "Нажмите для автоматической игры"}
        </span>
        <span className="hot-key">
          <span className="control-btn">A</span>
        </span>
      </div>
      <div className="hot-key-row">
        <span className="hot-key-description">
          {lang === "en" ? "Press for start a new game" : "Нажмите для начала новой игры"}
        </span>
        <span className="hot-key">
          <span className="control-btn">Space</span>
        </span>
      </div>
    </div>
  );
};
