function layout(settings: {
  align: 'left' | 'center' | 'right',
  padding: number
}){
  console.log('layout: ', settings);
}

const example = {
  align: 'center' as const, // Const Assertions
  padding: 0
} // Const Assertions can be put here too...

layout(example);
