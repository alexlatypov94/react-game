import React from "react";
import { LangCont } from "../core/interfaces";

export const languarges: LangCont = {
  en: "en",
  ru: "ru"
};

export const LangContext: any = React.createContext(languarges);
