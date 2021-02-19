import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = (): ReactElement => {
  return (
    <header>
      <div className="nav-item">
        <NavLink to="/game">Start Game</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <div className="header-title">
        <img src="../../../public/assets/img/logo512.png" alt="" />
      </div>
      <div className="nav-item">
        <NavLink to="/score">Score</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/">About Game</NavLink>
      </div>
    </header>
  );
};
