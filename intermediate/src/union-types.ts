type Padding = number | string;

function padLeft(value: string, padding: Padding) {
  if(typeof padding === 'number'){
    return Array(padding + 1).join(' ') + value;
  }
  if(typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected number of string, got '${padding}'.`)
}

console.log(padLeft('Hello world', 4));
console.log(padLeft('Hello world', '   '));
console.log(padLeft('Hello world', '----'));
// console.log(padLeft('Hello world', false));  // Error
