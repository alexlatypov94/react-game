import React, { ReactElement } from "react";
import "./Score.scss";

export const ScoreRow = (): ReactElement => {
  return (
    <div className="score-table-row">
      <div className="total-place table-column">1</div>
      <div className="score-person-name table-column">Alex</div>
      <div className="total-score table-column">1000</div>
    </div>
  );
};
