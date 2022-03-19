"use strict";
let regex = new RegExp('xyz+a');
let arrayInstance = [3, 4, 5];
let set = new Set([1, 2, 3]);
/**A first in first out collection */
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
