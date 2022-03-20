function double(this: {value: number}) { // this has fake assertion to check type at complie time
  this.value = this.value * 3;
}

const valid = {
  value: 20,
  double
}

valid.double();

console.log(valid.value); // 60


