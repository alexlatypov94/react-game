import React, { ReactElement } from "react";
import "./Score.scss";

export const ScoreRow = (props: any): ReactElement => {
  return (
    <div className="score-table-row">
      <div className="total-place table-column">{props.pos}</div>
      <div className="score-person-name table-column">{props.player}</div>
      <div className="total-score table-column">{props.score}</div>
    </div>
  );
};
