/** User Defined Type Guards */
type Square = {
  size: number
}

type Rectangle = {
  width: number,
  height: number
}

type Shape =
  | Square
  | Rectangle

function isSquare(shape: Shape ): shape is Square {
  return 'size' in shape;
}

function isSRectangle(shape: Shape ): shape is Rectangle {
  return 'width' in shape;
}

function area(shape: Shape){
  if(isSquare(shape)){
    return shape.size * shape.size;
  }
  else if(isSRectangle(shape)){
    return shape.width * shape.height;
  }


  const _ensureAllCasesAreHandled: never = shape;
  return _ensureAllCasesAreHandled
}

area({
  size: 2,
}); // 4
area({
  width: 3,
  height: 4,
}); // 12