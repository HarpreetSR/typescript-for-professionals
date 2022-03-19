class MyQueue<T> {
  data: Array<T> = [];
  push(item: T) { this.data.push(item); }
  pop(): T { return this.data.shift()!;}
}

const myQueue = new MyQueue<number>();

myQueue.push(123);
myQueue.push(223);

console.log(myQueue.pop().toPrecision(1));
console.log(myQueue.pop().toPrecision(1));
