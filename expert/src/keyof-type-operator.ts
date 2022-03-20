type Person = {
  name: string,
  age: number,
  location: string
};

const harpreet: Person = {
  name: 'Harpreet Singh Randhawa',
  age: 35,
  location: 'India'
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key){
  const value = obj[key];
  console.log('Getting: ', key, value);
  return value;
}

const age = logGet(harpreet, 'age');

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]){
  console.log('Setting: ', key, value);
  obj[key] = value;
}

logSet(harpreet, 'age', 32);