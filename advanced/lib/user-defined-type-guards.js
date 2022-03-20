"use strict";
function isSquare(shape) {
    return 'size' in shape;
}
function isSRectangle(shape) {
    return 'width' in shape;
}
function area(shape) {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    else if (isSRectangle(shape)) {
        return shape.width * shape.height;
    }
    const _ensureAllCasesAreHandled = shape;
    return _ensureAllCasesAreHandled;
}
area({
    size: 2,
    kind: "square"
}); // 4
area({
    width: 3,
    height: 4,
    kind: "rectangle"
}); // 12
