import React, { Component, ReactElement, useEffect, useRef } from "react";
import { BALL, BRICK, PADDLE, PLAYER } from "../core";
import { ballMovement } from "./BallMovement";
import { brick } from "./Brick";
import { brickCollision, collision, paddleCollision } from "./Collision";
import "./Game.scss";
import { paddle } from "./Paddle";
import { statistic } from "./Statistic";

let bricks: Array<any> = [];

export const Game = (props: any): ReactElement => {
  // eslint-disable-next-line no-null/no-null
  const canvasRef: any = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas: any = canvasRef.current;
      const ctx: any = canvas.getContext("2d");

      PADDLE.y = canvas.height - 30;

      const newBrickSet: any = brick(2, bricks, canvas, BRICK);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      statistic(ctx, PLAYER, canvas);
      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      ballMovement(ctx, BALL);
      collision(BALL, canvas, PLAYER);

      let brickCollisions: any = undefined;

      for (let i: number = 0; i < bricks.length; i += 1) {
        brickCollisions = brickCollision(BALL, bricks[i]);
        if (brickCollisions.hit && !bricks[i].broke) {
          if (brickCollisions.axis === "X") {
            BALL.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollisions.axis === "Y") {
            BALL.dy *= -1;
            bricks[i].broke = true;
          }

          PLAYER.score += 10;
        }
      }

      paddle(ctx, canvas, PADDLE);

      paddleCollision(BALL, PADDLE);

      requestAnimationFrame(render);
    };
    render();
  }, []);
  return (
    <canvas
      id="canvas"
      width={window.innerWidth < 900 ? window.innerWidth - 20 : window.innerWidth - (window.innerWidth * 20) / 100}
      ref={canvasRef}
      onMouseMove={(event: any) => (PADDLE.x = event.clientX - PADDLE.width * 2)}
      height="500"
    ></canvas>
  );
};
