import React, { ReactElement, useContext } from "react";
import { LangContext } from "../util";
import "./AboutGame.scss";

export const AboutGame = (): ReactElement => {
  const lang: any = useContext(LangContext);
  return (
    <div className="about-game-wrapper">
      <span>
        {lang === "en"
          ? "Please click on the canvas board to focus on it"
          : "Пожалуйста, нажмите на канвас, чтобы он был в фокусе"}
      </span>
      <img className="about-game-gifs" src="../../../public/assets/img/gif-start.gif" alt="" />
      <span>
        {lang === "en" ? "Press" : "Нажмите"} <span className="control-btn enter">&crarr;</span>{" "}
        {lang === "en" ? "to launch the ball" : "чтобы запустить шар"}
      </span>
      <img className="about-game-gifs" src="../../../public/assets/img/gif-ball.gif" alt="" />
      <span>
        {lang === "en" ? "To move the platform use the" : "Для перемещения платформы используйте"}
        <span className="control-btn">&larr;</span>
        <span className="control-btn">&rarr;</span> {lang === "en" ? "buttons" : "кнопки"}
      </span>
      <img className="about-game-gifs" src="../../../public/assets/img/gif-paddle.gif" alt="" />
    </div>
  );
};
