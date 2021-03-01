import { PLAYER } from "../../core";

export function brick(level: any, bricks: any, canvas: any, brick: any): Array<any> {
  brick.width = canvas.width / 10 - 5;
  const newbricks: Array<any> = [];
  if (!bricks) {
    return [];
  }

  if (bricks.length >= 10 * level) {
    return;
  }

  for (let i: number = 0; i < 10 * level; i += 1) {
    const newBrick: any = new Brick(brick.x + brick.width, brick.y, brick.width, brick.height, brick.colors);
    newbricks.push(newBrick);
    brick.x += brick.width + 5;
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5;
      brick.y += brick.height + 10;
    }
  }

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
    ctx.fillStyle = this.broke ? "rgba(19, 73, 89, 0)" : this.colors;

    ctx.lineWidth = 5;
    ctx.strokeStyle = this.broke ? "rgba(19, 73, 89, 0)" : "transparent";
    ctx.fill();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}
