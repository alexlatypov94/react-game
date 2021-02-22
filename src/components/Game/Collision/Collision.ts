import { isValidElement } from "react";

export function collision(ball: any, canvas: any, player: any): void {
  if (ball.y + ball.radius >= canvas.height) {
    player.lives--;
    ball.dy *= -1;
  }

  if (ball.y - ball.radius <= 0) {
    ball.dy *= -1;
  }

  if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
    ball.dx *= -1;
  }
}
