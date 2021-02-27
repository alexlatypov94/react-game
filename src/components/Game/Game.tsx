import React, { ReactElement, useContext, useEffect, useRef } from "react";
import { BALL, BRICK, PADDLE, PLAYER, SOUND } from "../core";
import { LangContext } from "../util";
import { allBroken } from "./AllBroken";
import { AutoPlay } from "./AutoPlay";
import { Ball, ballMovement } from "./BallMovement";
import { brick } from "./Brick";
import { brickCollision, collision, paddleCollision } from "./Collision";
import "./Game.scss";
import { paddle } from "./Paddle";
import resetBall from "./ResetBall/ResetBall";
import { statistic } from "./Statistic";

let bricks: Array<any> = [];

export const Game = (props: any): ReactElement => {
  // eslint-disable-next-line no-null/no-null
  const canvasRef: any = useRef(null);
  // eslint-disable-next-line no-null/no-null
  const wrapperCanvas: any = useRef(null);
  let start: boolean = false;
  let moveRight: boolean = false;
  let moveLeft: boolean = false;
  let isChangeColor: boolean = props.colorChange ? true : false;
  let autoplay: boolean = false;
  let autoPlayReset: boolean = false;
  let isUsageKeyboard: boolean = false;

  const lang: any = useContext(LangContext);

  const handleAutoplay = (e: any) => {
    if (e.type === "click" || (e.type === "keypress" && e.keyCode === 97)) {
      start = true;
      autoplay = true;
      autoPlayReset = true;
    }
  };

  const checkMovePaddle = (e: any) => {
    if (e.keyCode === 39 && !autoplay && isUsageKeyboard) {
      moveRight = true;
    }

    if (e.keyCode === 37 && !autoplay && isUsageKeyboard) {
      moveLeft = true;
    }

    if (e.keyCode === 13 && !autoplay && isUsageKeyboard) {
      start = true;
      PLAYER.changeLevel = true;
    }
  };

  const checkDontMove = (e: any) => {
    if (e.keyCode === 39 && !autoplay) {
      moveRight = false;
    }

    if (e.keyCode === 37 && !autoplay) {
      moveLeft = false;
    }
  };

  const handlerClick = (e: any) => {
    const isCanvas: boolean = e.type === "blur" ? false : true;
    const wrapper: any = wrapperCanvas.current;
    wrapper.classList.toggle("canvas-wrapper-active", isCanvas);

    if (e.type === "focus") {
      isUsageKeyboard = true;
    }

    if (e.type === "blur") {
      isUsageKeyboard = false;
    }
  };

  const handleNewGame = (e: any) => {
    if (e.type === "click" || (e.type === "keypress" && e.keyCode === 32)) {
      bricks = [];
      start = false;
      PLAYER.level = 1;
      PLAYER.lives = 5;
      PLAYER.score = 0;
      BRICK.y = 50;
      autoplay = false;
      autoPlayReset = false;
    }
    // console.log(e);
  };

  useEffect(() => {
    window.addEventListener("keydown", checkMovePaddle);
    window.addEventListener("keypress", handleAutoplay);
    window.addEventListener("keypress", handleNewGame);
    return () => {
      window.removeEventListener("keydown", checkDontMove);
      window.removeEventListener("keypress", handleAutoplay);
      // window.removeEventListener("keypress", handleNewGame);
    };
  }, []);

  useEffect(() => {
    const render = () => {
      const canvas: any = canvasRef.current;
      const ctx: any = canvas.getContext("2d");

      PADDLE.y = canvas.height - 30;

      if (autoPlayReset) {
        PLAYER.lives = 5;
        PLAYER.level = 1;
        PLAYER.score = 0;
        resetBall(BALL, canvas, PADDLE);
        bricks.length = 0;
        BRICK.y = 50;
        start = false;
        autoPlayReset = false;
      }

      const newBrickSet: any = brick(PLAYER.level, bricks, canvas, BRICK);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      if (isChangeColor) {
        bricks.map((el) => {
          el.colors = props.newColor;
        });

        isChangeColor = false;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      statistic(ctx, PLAYER, canvas, lang, autoplay);

      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      if (autoplay) {
        ballMovement(ctx, BALL);
        AutoPlay(canvas);
      } else if (start && PLAYER.changeLevel && !autoplay) {
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
          SOUND.currentTime = 0;
          SOUND.play();
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
    <div className="wrapper-game-field">
      <div
        role="button"
        tabIndex={0}
        className="canvas-wrapper"
        ref={wrapperCanvas}
        onKeyUp={checkDontMove}
        onFocus={handlerClick}
        onBlur={handlerClick}
        onClick={handlerClick}
      >
        <canvas
          id="canvas"
          width={window.innerWidth < 900 ? window.innerWidth - 20 : window.innerWidth - (window.innerWidth * 20) / 100}
          ref={canvasRef}
          height={window.innerHeight / 1.7}
        ></canvas>
      </div>
      <div className="canvas-btn">
        <button className="autoplay" onClick={handleAutoplay} onKeyPress={handleAutoplay}>
          {lang === "en" ? "Click to autoplay" : "Нажмите для автоигры"}
        </button>
        <button className="newGame" onClick={handleNewGame}>
          {lang === "en" ? "New game" : "Новая игра"}
        </button>
      </div>
    </div>
  );
};
