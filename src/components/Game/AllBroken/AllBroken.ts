import resetBall from "../ResetBall/ResetBall";

export function allBroken(bricks: any, player: any, canvas: any, ball: any, brick: any, paddle: any): void {
  let total: number = 0;
  for (let i: number = 0; i < bricks.length; i += 1) {
    if (bricks[i].broke === true) {
      total += 1;
    }
  }

  if (total === bricks.length) {
    player.level += 1;
    player.changeLevel = false;
    resetBall(ball, canvas, paddle);
    brick.y = 50;
   
  }
}
