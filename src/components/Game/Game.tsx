import React, { ReactElement, useEffect, useRef } from "react";
import { BALL, BRICK, PADDLE, PLAYER } from "../core";
import { allBroken } from "./AllBroken";
import { Ball, ballMovement } from "./BallMovement";
import { brick } from "./Brick";
import { brickCollision, collision, paddleCollision } from "./Collision";
import "./Game.scss";
import { paddle } from "./Paddle";
import resetBall from "./ResetBall/ResetBall";
import { statistic } from "./Statistic";

let bricks: Array<any> = [];

export const Game = (): ReactElement => {
  // eslint-disable-next-line no-null/no-null
  const canvasRef: any = useRef(null);
  let start: boolean = false;
  let moveRight: boolean = false;
  let moveLeft: boolean = false;

  function checkMovePaddle(e: any) {
    if (e.keyCode === 39) {
      moveRight = true;
    }

    if (e.keyCode === 37) {
      moveLeft = true;
    }

    if (e.keyCode === 13) {
      start = true;
      PLAYER.changeLevel = true;
    }
  }

  function checkDontMove(e: any) {
    if (e.keyCode === 39) {
      moveRight = false;
    }

    if (e.keyCode === 37) {
      moveLeft = false;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", checkMovePaddle);
    return window.removeEventListener("keydown", checkDontMove);
  }, []);

  useEffect(() => {
    const render = () => {
      const canvas: any = canvasRef.current;
      const ctx: any = canvas.getContext("2d");

      PADDLE.y = canvas.height - 30;

      const newBrickSet: any = brick(PLAYER.level, bricks, canvas, BRICK);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      statistic(ctx, PLAYER, canvas);

      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      if (start && PLAYER.changeLevel) {
        ballMovement(ctx, BALL);
      } else {
        const ballNull: any = new Ball(PADDLE.x + PADDLE.width / 2, canvas.height - 40, BALL.radius);
        ballNull.draw(ctx);
        BALL.x = PADDLE.x + PADDLE.width / 2;
        BALL.y = canvas.height - 20;
      }

      if (BALL.y + BALL.radius >= canvas.height) {
        start = false;
      }

      allBroken(bricks, PLAYER, canvas, BALL, BRICK, PADDLE);

      if (PLAYER.lives === 0) {
        PLAYER.lives = 5;
        PLAYER.level = 1;
        PLAYER.score = 0;
        resetBall(BALL, canvas, PADDLE);
        bricks.length = 0;
        BRICK.y = 50;
        start = false;
      }

      collision(BALL, canvas, PLAYER, PADDLE);

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

      if (moveLeft) {
        PADDLE.x -= PADDLE.speed;
      }

      if (moveRight) {
        PADDLE.x += PADDLE.speed;
      }

      paddleCollision(BALL, PADDLE);

      window.requestAnimationFrame(render);
    };
    render();
  }, []);
  return (
    <div role="button" tabIndex={0} className="canvas-wrapper" onKeyUp={checkDontMove}>
      <canvas
        id="canvas"
        width={window.innerWidth < 900 ? window.innerWidth - 20 : window.innerWidth - (window.innerWidth * 20) / 100}
        ref={canvasRef}
        height="500"
      ></canvas>
    </div>
  );
};
