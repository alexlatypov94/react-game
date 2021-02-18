import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Game } from "../Game";
import "./StartMenu.scss";

const MenuItem = (props: any) => {
  console.log(props);
  return (
    <div className="menuItem">
      <NavLink exact to={props.path}>
        {props.value}
      </NavLink>
    </div>
  );
};

export const StartMenu = (): ReactElement => {
  return (
    <div className="start-menu">
      <MenuItem path="/game" value="Start game" />
      <MenuItem path="/settings" value="Settings" />
      <MenuItem path="/score" value="Top Scores" />
      <MenuItem path="/about-game" value="About for game" />
    </div>
  );
};
