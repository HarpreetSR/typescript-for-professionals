type NameFields = {firstName: string, lastName: string};

function addFullName<T extends NameFields>(obj: T): T & {fullName: string} {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  };
}

const harpreet = addFullName({
  email: 'harpreetWP@gmail.com',
  firstName: 'harpreet',
  lastName: 'Singh'
})

console.log(harpreet.email); // HarpreetWP@gmail.com
console.log(harpreet.fullName); // Harpreet Singh

// const john = addFullName({firstName: 'John'}); //Error



