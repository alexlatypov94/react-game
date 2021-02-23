import { SPRITES } from "./../../core/constants";
export function paddle(ctx: any, canvas: any, paddleObj: any): void {
  const paddle: any = new Paddle(paddleObj.x, paddleObj, canvas, ctx);
  paddle.move();

  if (paddleObj.x <= 0) {
    paddleObj.x = 0;
  } else if (paddleObj.x + paddleObj.width >= canvas.width) {
    paddleObj.x = canvas.width - paddleObj.width;
  }
}

class Paddle {
  constructor(private x: number, public paddleObj: any, public canvas: any, private ctx: any) {
    this.x = x;
    this.y = canvas.height - 30;
    this.height = 20;
    this.width = paddleObj.width;
    this.colors = ["red", "#FFA62B"];
    this.ctx = ctx;
  }

  public move() {
    this.ctx.beginPath();
    SPRITES.paddle = new Image();
    SPRITES.paddle.src = "../../../../public/assets/img/paddleRed.png";
    this.ctx.drawImage(SPRITES.paddle, 0, 0, 104, 24, this.x, this.y, this.width, this.height);
  }
}
