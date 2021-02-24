import React, { ReactElement } from "react";
import { ScoreRow } from "./index";
import "./Score.scss";

export const Score = (): ReactElement => {
  return (
    <div className="score-wrapper">
      <h1 className="score-title">Statistic</h1>
      <ScoreRow />
      <ScoreRow />
      <ScoreRow />
      <ScoreRow />
      <ScoreRow />
    </div>
  );
};
