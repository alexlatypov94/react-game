import React, { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LangContext } from "../util";
import "./Header.scss";

export const Header = (): ReactElement => {
  const lang: any = useContext(LangContext);
  return (
    <header>
      <div className="nav-item">
        <NavLink to="/game">{lang === "en" ? "Start Game" : "Начать игру"}</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/settings">{lang === "en" ? "Settings" : "Настройки"}</NavLink>
      </div>
      <div className="header-title">
        <img src="../../../public/assets/img/logo512.png" alt="" />
      </div>
      <div className="nav-item">
        <NavLink to="/score">{lang === "en" ? "Statistic" : "Статистика"}</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/">{lang === "en" ? "About Game" : "Об игре"}</NavLink>
      </div>
    </header>
  );
};
