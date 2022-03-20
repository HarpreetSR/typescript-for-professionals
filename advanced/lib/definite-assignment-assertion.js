"use strict";
// Definite Assignment Assertion
/** "!" sign is used as definite assignment assertion */
class Point {
    constructor() {
        this.moveRandom();
    }
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
