export function brick(level: any, bricks: any, canvas: any, brick: any): Array<any> {
  brick.width = canvas.width / 5 - 13;
  const newbricks: Array<any> = [];
  if (!bricks) {
    return [];
  }

  if (bricks.length >= 5 * level) {
    return;
  }

  for (let i: number = 0; i < 5 * level; i += 1) {
    const newBrick: any = new Brick(brick.x + brick.width, brick.y, brick.width, brick.height, brick.colors);
    newbricks.push(newBrick);
    brick.x += brick.width + 15;
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5;
      brick.y += brick.height + 10;
    }
  }
  console.log(newbricks);
  return newbricks;
}

class Brick {
  constructor(public x: number, public y: number, public w: number, public h: number, public c: Array<string>) {
    this.x = x - w;
    this.y = y;
    this.width = w;
    this.height = h;
    this.colors = c;
    this.broke = false;
  }

  public draw(ctx: any) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.broke ? "rgba(19, 73, 89, 0)" : this.colors[1];

    ctx.lineWidth = 5;
    ctx.strokeStyle = this.broke ? "rgba(19, 73, 89, 0)" : "transparent";
    // ctx.globalCompositeOperation = "destination-atop";
    // ctx.shadowBlur = 0;
    // ctx.shadowColor = "blue";
    ctx.fill();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}
