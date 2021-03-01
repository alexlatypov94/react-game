export function brickCollision(circle: any, rect: any): any {
  const distX: number = Math.abs(circle.x - rect.x - rect.width / 2);
  const distY: number = Math.abs(circle.y - rect.y - rect.height / 2);

  if (distX > rect.width / 2 + circle.radius) {
    return {
      hit: false
    };
  }

  if (distY > rect.height / 2 + circle.radius) {
    return {
      hit: false
    };
  }

  if (distX <= rect.width / 2) {
    return {
      hit: true,
      axis: "Y"
    };
  }

  if (distY <= rect.height / 2) {
    return {
      hit: true,
      axis: "X"
    };
  }

  const dx: number = distX - rect.width / 2;
  const dy: number = distY - rect.height / 2;

  return {
    hit: dx * dx + dy * dy <= circle.radius * circle.radius,
    axis: "X"
  };
}
