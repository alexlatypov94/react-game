import { SPRITES } from "./../../core/constants";
export function ballMovement(ctx: any, ball: any): void {
  const data: any = new Ball(ball.x, ball.y, ball.radius);
  data.draw(ctx);
  ball.x += ball.dx;
  ball.y += ball.dy;
}

export class Ball {
  constructor(private x: number, private y: number, private radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  public draw(ctx: any): void {
    ctx.beginPath();

    SPRITES.ball = new Image();
    SPRITES.ball.src = "../../../../public/assets/img/ballBlue.png";
    ctx.drawImage(SPRITES.ball, 0, 0, 22, 22, this.x - this.radius, this.y - this.radius, 22, 22);
  }
}
