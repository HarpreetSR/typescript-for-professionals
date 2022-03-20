type PointCreator = {
  new(x: number, y: number): {x: number, y: number},
  new(x: number, y: number, z: number): {x: number, y: number, z: number},
  (x: number, y: number): {x: number, y: number},
  (x: number, y: number, z: number): {x: number, y: number, z: number},
  debugName: string,
}