/**Type Assertions 2 methods */
//  - as string
//  - <string> - only work in .ts file

function load(): unknown {
  return 'Hello Ji...';
}

let helloJi = load();

const trimmed = (helloJi as string).trim();

/** Doesn't work in TSX file */
// const trimmedJSX = (<string>helloJi).trim();