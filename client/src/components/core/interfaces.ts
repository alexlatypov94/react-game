export interface LangCont {
  en: string;
  ru: string;
}

export interface ScoreObj {
  name: string;
  score: number;
}

export interface BrickSet {
  broke: boolean;
  c: string;
  colors: string;
  h: number;
  height: number;
  w: number;
  width: number;
  x: number;
  y: number;
}

export interface IPlayer {
  name: string;
  lives: number;
  score: number;
  level: number;
  changeLevel: boolean;
}

export interface IBrick {
  x: number;
  y: number;
  height: number;
  density: number;
  colors: string;
}

export interface IBall {
  dx: number;
  dy: number;
  radius: number;
  speed: number;
}

export interface ISound {
  musicOn: string;
  musicOff: string;
  soundOn: string;
  soundOff: string;
}

export interface IPaddle {
  width: number;
  height: number;
  x: number;
  color: string;
  speed: number;
}
