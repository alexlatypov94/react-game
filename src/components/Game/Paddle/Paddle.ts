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
  constructor(private x: number, private paddleObj: any, private canvas: any, private ctx: any) {
    this.x = x;
    this.y = canvas.height - 30;
    this.height = 20;
    this.width = paddleObj.width;
    this.colors = ["red", "#FFA62B"];
    this.ctx = ctx;
  }

  public move() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = this.broke ? "white" : this.colors[1];
    this.ctx.strokeStyle = this.broke ? "white" : "red";
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = this.broke ? "white" : this.colors[1];
    this.ctx.shadowBlur = 0;
    this.ctx.shadowColor = "blue";
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.ctx.fill();
  }
}
