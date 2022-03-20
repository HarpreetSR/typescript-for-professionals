// Typeof Type Operator

const memberResponse = {
  "name": "Harpreet Singh Randhawa",
  "email": "HarpreetWP@gmail.com",
  "firstName": "Harpreet",
  "lastName": "Singh",
  "middleName": "Randhawa"
}

type MemberResponse = typeof memberResponse;

function processResponse(member: MemberResponse) {
  console.log('Full Name: ', `${member.firstName} ${member.firstName}`);

}