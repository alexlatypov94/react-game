import React, { Component, ReactElement, useEffect, useRef } from "react";
import { BALL, PADDLE } from "../core";
import { ballMovement } from "./BallMovement";
import { collision } from "./Collision";
import "./Game.scss";
import { paddle } from "./Paddle";

export const Game = (props: any): ReactElement => {
  // eslint-disable-next-line no-null/no-null
  const canvasRef: any = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas: any = canvasRef.current;
      const ctx: any = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ballMovement(ctx, BALL);
      collision(BALL, canvas);
      paddle(ctx, canvas, PADDLE);
      requestAnimationFrame(render);
    };
    render();
  }, []);
  return (
    <canvas
      width="800px"
      ref={canvasRef}
      onMouseMove={(event: any) => (PADDLE.x = event.clientX - PADDLE.width * 2)}
      height="500px"
    ></canvas>
  );
};
