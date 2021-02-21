export function ballMovement(ctx: any, ball: any): void {
  const data: any = new Ball(ball.x, ball.y, ball.radius);
  data.draw(ctx);
  ball.x += ball.dx;
  ball.y += ball.dy;
}

class Ball {
  constructor(private x: number, private y: number, private radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  public draw(ctx: any) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.strokeWidth = 4;
    ctx.fill();
    ctx.stroke();
  }
}
