export default function resetBall(ball: any, canvas: any, paddle: any): void {
  ball.x = paddle.x;
  ball.y = paddle.y - 80;
  ball.dx = 6 * (Math.random() * 2 - 1);
  ball.dy = -6;
}
