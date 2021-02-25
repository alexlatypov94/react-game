export const BALL: any = {
  dx: 5,
  dy: 5,
  radius: 12,
  speed: 10
};

export const BRICK: any = {
  x: 0.5,
  y: 50,
  height: 20,
  density: 2,
  colors: ["blue", "lightblue"]
};

export const PLAYER: any = {
  name: "Alex",
  lives: 5,
  score: 0,
  level: 1,
  changeLevel: true
};

export const PADDLE: any = {
  width: 100,
  height: 20,
  x: 100,
  color: "orange",
  speed: 15
};

export const SPRITES: any = {
  paddle: undefined,
  ball: undefined,
  brick: undefined
};

export const SOUND_MUSIC_IMG: any = {
  musicOn: "../../../public/assets/img/music-player.svg",
  musicOff: "../../../public/assets/img/music-off.svg",
  soundOn: "../../../public/assets/img/volume.svg",
  soundOff: "../../../public/assets/img/no-sound.svg"
};

export const MUSIC: any = {
  snoop: {
    ref: "../../../public/assets/audio/snoop.mp3",
    volume: 0.2
  },

  brick: {
    ref: "../../../public/assets/audio/brick.mp3",
    volume: 0.5
  }
};
