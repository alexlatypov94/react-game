import React, { ReactElement } from "react";
import "./Header.scss";

export const Header = (): ReactElement => {
  return (
    <header>
      <h1 className="header-title">React Game</h1>
    </header>
  );
};
