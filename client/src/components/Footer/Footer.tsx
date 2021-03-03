import React, { ReactElement } from "react";
import "./Footer.scss";

export const Footer = (): ReactElement => {
  return (
    <footer>
      <a className="developer" href="https://github.com/alexlatypov94">
        <img src="../../../public/assets/img/github.svg" alt="" />
      </a>
      <span className="footer-year">2021</span>
      <a className="ref-school" href="">
        <img src="../../../public/assets/img/rs_school_js.svg" alt="" />
      </a>
    </footer>
  );
};
