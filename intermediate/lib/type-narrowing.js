"use strict";
function area(shape) {
    if ('size' in shape) {
        return shape.size * shape.size;
    }
    if ('width' in shape) {
        return shape.width * shape.height;
    }
}
area({ size: 2 }); // 4
area({ width: 3, height: 4 }); // 12
