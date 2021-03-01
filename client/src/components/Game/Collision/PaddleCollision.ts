export function paddleCollision(ball: any, paddle: any): void {
  if (
    ball.x < paddle.x + paddle.width &&
    ball.x > paddle.x &&
    paddle.y < paddle.y + paddle.height &&
    ball.y + ball.radius > paddle.y - paddle.height / 2
  ) {
    let collidePoint: number = ball.x - (paddle.x + paddle.width / 2);

    collidePoint = collidePoint / (paddle.width / 2);

    const angle: number = (collidePoint * Math.PI) / 3;

    ball.dx = ball.speed * Math.sin(angle);
    ball.dy = -ball.speed * Math.cos(angle);
  }
}
