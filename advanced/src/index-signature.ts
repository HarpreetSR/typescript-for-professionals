type Member = {
  displayName: string,
  email: string,
}

type MemberDictionary = {
  [username: string]: Member | undefined,
}

const members: MemberDictionary = {
  jaspreet: { displayName: 'jaspreet Kaur', email: 'JaspreetWP@gmail.com'}
}

members['harpreet'] = { displayName: 'Harpreet Singh Randhawa', email: 'HarpreetWP@gmail.com'};

console.log(members['harpreet']);

delete members['harpreet'];

const result = members['missing'];

//console.log(result, result.email); // Type check undefined

// members['members'] = { displayName: 'Singh', emale: 'email@mail.com'}; //Error

