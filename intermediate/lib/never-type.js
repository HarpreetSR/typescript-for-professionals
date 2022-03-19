"use strict";
function area(shape) {
    if ('size' in shape) {
        return shape.size * shape.size;
    }
    else if ('width' in shape) {
        return shape.width * shape.height;
    }
    /**If you remove circle else-if condition, never will gave an error */
    else if ('radius' in shape) {
        return Math.PI * (shape.radius ** 2);
    }
    const _ensureAllCasesAreHandled = shape;
    return _ensureAllCasesAreHandled;
}
area({ size: 2 }); // 4
area({ width: 3, height: 4 }); // 12
