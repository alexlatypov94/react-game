export function statistic(ctx: any, player: any, canvas: any): void {
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Name: ${player.name}`, 20, 30);

  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  let gap: number = 0;
  for (let i: number = 0; i < player.lives; i += 1) {
    ctx.fillText("❤", canvas.width / 2 + gap, 30);
    gap += 30;
  }

  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}
