type Person = {
  name: string,
  email?: string | null | undefined
}

function sendEmail(email: string) {
  console.log('Send email to ', email);
}

function ensureContactable(person: Person) {
  if(person.email == null) throw new Error(`Person ${person.name} is not contactable.`)
}

function contact(person: Person){
  ensureContactable(person);
  sendEmail(person.email!); // "!" = non-null assertion
  // sendEmail(person.email); // Error
}