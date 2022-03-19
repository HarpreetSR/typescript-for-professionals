let regex: RegExp = new RegExp('xyz+a');

let arrayInstance: Array<number> = [3,4,5];

let set: Set<number> = new Set([1,2,3]);

/**A first in first out collection */
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.shift(); }
}

let queue: Queue<number> = new Queue();