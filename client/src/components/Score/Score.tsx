import React, { ReactElement, useContext } from "react";
import { LangContext } from "../util";
import { ScoreRow } from "./index";
import "./Score.scss";

export const Score = (): ReactElement => {
  const lang: any = useContext(LangContext);
  return (
    <div className="score-wrapper">
      <h1 className="score-title">{lang === "en" ? "Statistic" : "Статистика"}</h1>
      <ScoreRow />
      <ScoreRow />
      <ScoreRow />
      <ScoreRow />
      <ScoreRow />
    </div>
  );
};
