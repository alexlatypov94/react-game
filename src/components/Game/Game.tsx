import React, { Component, ReactElement } from "react";
import "./Game.scss";

export const Game = (props): ReactElement => {
  return (
    <div className="game">
      <canvas></canvas>
    </div>
  );
};
