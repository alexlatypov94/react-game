import React, { ReactElement, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context";
import { LangContext } from "../util";
import "./Header.scss";

export const Header = (): ReactElement => {
  const history: any = useHistory();
  const lang: string = useContext(LangContext);
  const auth: any = useContext(AuthContext);
  const logoutHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <header>
      <div className="nav-item">
        <NavLink to="/game">{lang === "en" ? "Start Game" : "Начать игру"}</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/settings">{lang === "en" ? "Settings" : "Настройки"}</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/score">{lang === "en" ? "Statistic" : "Статистика"}</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/about-game">{lang === "en" ? "About Game" : "Об игре"}</NavLink>
      </div>
      <div className="nav-item">
        <a className="nav-item-logout" href="/" onClick={logoutHandler}>
          {lang === "en" ? "Log out" : "Выйти"}
        </a>
      </div>
    </header>
  );
};
