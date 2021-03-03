export function collision(ball: any, canvas: any, player: any, paddle: any): void {
  if (ball.y + ball.radius >= canvas.height) {
    player.lives--;
    ball.x = paddle.x;
    ball.y = paddle.y - 30;
    ball.dx = 6 * (Math.random() * 2 - 1);
    ball.dy = -6;
    return;
  }

  if (ball.y - ball.radius <= 0) {
    ball.dy *= -1;
  }

  if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
    ball.dx *= -1;
  }
}
