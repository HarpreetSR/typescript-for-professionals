type myPoint = readonly [number, number];

function letsMove(point: myPoint, x: number, y:number): myPoint {
  return [point[0] + x, point[1] + y];
}

const point: myPoint = [0, 0];
const moved = letsMove(point, 10, 10);

console.log(moved); // [10, 10]
console.log(point); // [0, 0]

