import { BALL, PADDLE } from "./../../core/constants";
let end: boolean = false;
export const AutoPlay = (canvas: any): void => {
  if (PADDLE.x + PADDLE.width === canvas.width) {
    end = true;
  }

  if (PADDLE.x <= 0) {
    end = false;
  }
  if (PADDLE.x - PADDLE.width !== canvas.width && end === false) {
    PADDLE.x = BALL.x - PADDLE.width / 2 - PADDLE.speed;
  } else {
    PADDLE.x = BALL.x - PADDLE.speed;
  }
};
