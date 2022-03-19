
/**Literal Type */
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

console.log(rollDice());

/** Error */
// if(rollDice() === 7){
//   throw new Error('Not possible!')
// }