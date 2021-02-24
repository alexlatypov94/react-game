import React, { ReactElement } from "react";
import "./AboutGame.scss";

export const AboutGame = (): ReactElement => {
  return (
    <div className="about-game-wrapper">
      <span>Please click on the canvas board to focus on it</span>
      <img className="about-game-gifs" src="../../../public/assets/img/gif-start.gif" alt="" />
      <span>
        Press <span className="control-btn enter">&crarr;</span> to launch the ball
      </span>
      <img className="about-game-gifs" src="../../../public/assets/img/gif-ball.gif" alt="" />
      <span>
        To move the platform use the <span className="control-btn">&larr;</span>
        <span className="control-btn">&rarr;</span> buttons
      </span>
      <img className="about-game-gifs" src="../../../public/assets/img/gif-paddle.gif" alt="" />
    </div>
  );
};
