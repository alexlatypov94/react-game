import React, { ReactElement, useContext } from "react";
import { ScoreObj } from "../core/interfaces";
import { LangContext } from "../util";
import { ScoreRow } from "./index";
import "./Score.scss";

export const Score = (): ReactElement => {
  const lang: string = useContext(LangContext);
  const stat: Array<ScoreObj> = JSON.parse(localStorage.getItem("Statistics")!) || [];

  stat.sort((a, b) => (a.score > b.score ? -1 : 1));

  if (stat.length > 10) {
    stat?.splice(10, stat.length);
  }

  return (
    <div className="score-wrapper">
      <h1 className="score-title">{lang === "en" ? "Statistic" : "Статистика"}</h1>
      {stat.map((el, index) => {
        return <ScoreRow player={el.name} score={el.score} key={index} pos={index + 1} />;
      })}
    </div>
  );
};
